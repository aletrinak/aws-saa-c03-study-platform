// AWS SAA-C03 Interactive Learning Portal Application
(function () {
  const STORAGE_KEY = "SAA_C03_STUDY_PORTAL_V1";
  const LANG_STORAGE_KEY = "saa_language";

  // Language management
  let currentLang = localStorage.getItem(LANG_STORAGE_KEY) || "es";

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_STORAGE_KEY, lang);
    updateLanguageUI();
    renderSidebar();
    renderDayContent();
  }

  function updateLanguageUI() {
    const btnEs = document.getElementById("btn-lang-es");
    const btnEn = document.getElementById("btn-lang-en");
    if (btnEs && btnEn) {
      if (currentLang === "en") {
        btnEs.classList.remove("active");
        btnEn.classList.add("active");
      } else {
        btnEs.classList.add("active");
        btnEn.classList.remove("active");
      }
    }
    const simLink = document.getElementById("btn-go-simulator-header");
    if (simLink) {
      simLink.href = `simulator/?lang=${currentLang}`;
      simLink.title = currentLang === "en" ? "Open Full Official Simulator (65 Pearson VUE questions)" : "Abrir Simulador Completo (65 preguntas Pearson VUE)";
      simLink.innerHTML = currentLang === "en" ? "⏱️ Official Simulator" : "⏱️ Simulador Oficial";
    }
    const hbLink = document.getElementById("btn-handbook-header");
    if (hbLink) {
      hbLink.title = currentLang === "en" ? "Technical Handbook: 119 AWS Services & Exam Triggers" : "Handbook Técnico: 119 Servicios de AWS y Triggers de Examen";
      hbLink.innerHTML = currentLang === "en" ? "📘 Handbook (119 Services)" : "📘 Handbook (119 Servicios)";
    }
    const totalFc = (window.OFFICIAL_FLASHCARDS && window.OFFICIAL_FLASHCARDS[currentLang]) ? window.OFFICIAL_FLASHCARDS[currentLang].length : 44;
    const tabFc = document.getElementById("tab-flashcards");
    if (tabFc) {
      tabFc.innerHTML = currentLang === "en" ? `📇 Official Flashcards (${totalFc})` : `📇 Flashcards Oficiales (${totalFc})`;
    }
    const tabRd = document.getElementById("tab-reading");
    if (tabRd) {
      tabRd.innerHTML = currentLang === "en" ? "📖 Study Material" : "📖 Material de Estudio";
    }
    const tabQz = document.getElementById("tab-quiz");
    if (tabQz) {
      tabQz.innerHTML = currentLang === "en" ? "📝 Validation Quiz" : "📝 Examen de Validación";
    }
    const btnExport = document.getElementById("btn-export-portal");
    if (btnExport) {
      btnExport.innerHTML = currentLang === "en" ? "💾 Backup" : "💾 Respaldo";
      btnExport.title = currentLang === "en" ? "Export or Import your progress" : "Exportar o Importar tu progreso";
    }
    const btnReset = document.getElementById("btn-reset");
    if (btnReset) {
      btnReset.innerHTML = currentLang === "en" ? "Reset ↺" : "Reiniciar ↺";
      btnReset.title = currentLang === "en" ? "Reset progress" : "Reiniciar progreso";
    }
    updateUnlockButtonUI();
  }

  function updateUnlockButtonUI() {
    const btnUnlockAll = document.getElementById("btn-unlock-all");
    if (!btnUnlockAll || !window.PORTAL_DATA) return;
    const allIds = getAllDays().map(d => d.id);
    const isFreeMode = state.unlockedDays.length >= allIds.length;
    btnUnlockAll.setAttribute("aria-pressed", isFreeMode ? "true" : "false");
    if (currentLang === "en") {
      btnUnlockAll.innerHTML = isFreeMode ? "🔒 Progressive Mode" : "🔓 Free Mode";
      btnUnlockAll.title = isFreeMode ? "Restore Progressive Mode" : "Unlock all 19 days for direct review";
    } else {
      btnUnlockAll.innerHTML = isFreeMode ? "🔒 Modo Progresivo" : "🔓 Modo Libre";
      btnUnlockAll.title = isFreeMode ? "Restaurar Modo Progresivo según tus aprobados" : "Desbloquear los 19 módulos para repaso directo";
    }
  }

  // App State
  let state = {
    unlockedDays: [1],
    completedDays: {}, // { dayId: { score: 100, completedAt: '...' } }
    currentDayId: 1,
    currentTab: "reading", // 'reading' | 'flashcards' | 'quiz'
    flashcardIndex: 0,
    flashcardFlipped: false,
    selectedAnswers: {}, // { qId: optionIndex }
    quizEvaluated: false
  };

  // Load from LocalStorage
  function loadProgress() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        state.unlockedDays = parsed.unlockedDays || [1];
        state.completedDays = parsed.completedDays || {};
        state.currentDayId = parsed.currentDayId || 1;
      } catch (e) {
        console.error("Error cargando progreso:", e);
      }
    }
  }

  // Save to LocalStorage
  function saveProgress() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        unlockedDays: state.unlockedDays,
        completedDays: state.completedDays,
        currentDayId: state.currentDayId
      })
    );
  }

  // Helper: flatten all days
  function getAllDays() {
    const list = [];
    window.PORTAL_DATA.weeks.forEach(week => {
      week.days.forEach(day => {
        list.push({ ...day, weekTitle: week.title, domain: week.domain });
      });
    });
    return list;
  }

  function getDayById(id) {
    return getAllDays().find(d => d.id === id);
  }

  function getNextDay(id) {
    const all = getAllDays();
    const idx = all.findIndex(d => d.id === id);
    if (idx >= 0 && idx < all.length - 1) {
      return all[idx + 1];
    }
    return null;
  }

  // DOM Elements
  const elSidebarList = document.getElementById("sidebar-list");
  const elProgressBar = document.getElementById("progress-bar-fill");
  const elProgressText = document.getElementById("progress-text");
  const elProgressCount = document.getElementById("progress-count");
  const elDayHeader = document.getElementById("day-header");
  const elReadingView = document.getElementById("reading-view");
  const elFlashcardsView = document.getElementById("flashcards-view");
  const elQuizView = document.getElementById("quiz-view");
  const elTabReading = document.getElementById("tab-reading");
  const elTabFlashcards = document.getElementById("tab-flashcards");
  const elTabQuiz = document.getElementById("tab-quiz");
  const elBtnReset = document.getElementById("btn-reset");

  // Render Sidebar
  function renderSidebar() {
    elSidebarList.innerHTML = "";
    const allDays = getAllDays();
    const totalCount = allDays.length;
    const completedCount = Object.keys(state.completedDays).length;
    const pct = Math.round((completedCount / totalCount) * 100);

    elProgressBar.style.width = pct + "%";
    elProgressText.innerText = currentLang === "en" ? `${pct}% Completed` : `${pct}% Completado`;
    elProgressCount.innerText = currentLang === "en" ? `${completedCount}/${totalCount} days validated` : `${completedCount}/${totalCount} días validados`;
    updateUnlockButtonUI();

    window.PORTAL_DATA.weeks.forEach(week => {
      const weekGroup = document.createElement("div");
      weekGroup.className = "week-group";

      const weekHeader = document.createElement("div");
      weekHeader.className = "week-header";
      weekHeader.innerHTML = `
        <span>${week.title}</span>
        <span class="week-domain">${week.domain}</span>
      `;
      weekGroup.appendChild(weekHeader);

      const dayList = document.createElement("ul");
      dayList.className = "day-list";

      week.days.forEach(day => {
        const isUnlocked = state.unlockedDays.includes(day.id);
        const isCompleted = !!state.completedDays[day.id];
        const isActive = state.currentDayId === day.id;

        const li = document.createElement("li");
        li.className = `day-item ${isActive ? "active" : ""} ${!isUnlocked ? "locked" : ""}`;

        let statusBadge = "";
        if (isCompleted) {
          statusBadge = `<span class="status-badge completed" title="Aprobado con ${state.completedDays[day.id].score}%">✓</span>`;
        } else if (isUnlocked) {
          statusBadge = `<span class="status-badge unlocked" title="Desbloqueado">●</span>`;
        } else {
          statusBadge = `<span class="status-badge locked" title="Bloqueado - Aprueba el examen anterior">🔒</span>`;
        }

        li.innerHTML = `
          <div class="day-info">
            <div class="day-title">${day.title}</div>
            <div class="day-meta">${day.readTime}</div>
          </div>
          ${statusBadge}
        `;

        if (isUnlocked) {
          li.addEventListener("click", () => {
            selectDay(day.id);
          });
        }

        dayList.appendChild(li);
      });

      weekGroup.appendChild(dayList);
      elSidebarList.appendChild(weekGroup);
    });
  }

  // Select Day
  function selectDay(dayId) {
    if (!state.unlockedDays.includes(dayId)) return;
    state.currentDayId = dayId;
    state.currentTab = "reading";
    state.selectedAnswers = {};
    state.quizEvaluated = false;
    saveProgress();
    renderSidebar();
    renderDayContent();
  }

  // Render Current Day Content
  function renderDayContent() {
    const day = getDayById(state.currentDayId);
    if (!day) return;

    // Header Card
    elDayHeader.innerHTML = `
      <div class="day-tags">
        <span class="tag tag-domain">${day.domain}</span>
        <span class="tag tag-time">${day.readTime}</span>
      </div>
      <h1>${day.title}</h1>
      <p>${day.summary}</p>
    `;

    // Tabs update
    elTabReading.classList.toggle("active", state.currentTab === "reading");
    if (elTabFlashcards) elTabFlashcards.classList.toggle("active", state.currentTab === "flashcards");
    elTabQuiz.classList.toggle("active", state.currentTab === "quiz");

    elReadingView.style.display = state.currentTab === "reading" ? "block" : "none";
    if (elFlashcardsView) elFlashcardsView.style.display = state.currentTab === "flashcards" ? "block" : "none";
    elQuizView.style.display = state.currentTab === "quiz" ? "block" : "none";

    if (state.currentTab === "reading") {
      renderReading(day);
    } else if (state.currentTab === "flashcards") {
      renderFlashcards();
    } else {
      renderQuiz(day);
    }
  }

  // Render Flashcards View
  function renderFlashcards() {
    if (!elFlashcardsView) return;
    const cards = (window.OFFICIAL_FLASHCARDS && window.OFFICIAL_FLASHCARDS[currentLang]) || [];
    if (!cards || cards.length === 0) {
      elFlashcardsView.innerHTML = `<p style="text-align:center; padding:2rem;">No hay flashcards disponibles.</p>`;
      return;
    }

    if (state.flashcardIndex < 0) state.flashcardIndex = 0;
    if (state.flashcardIndex >= cards.length) state.flashcardIndex = cards.length - 1;

    const card = cards[state.flashcardIndex];
    const isEn = currentLang === "en";
    const flippedClass = state.flashcardFlipped ? "flipped" : "";

    elFlashcardsView.innerHTML = `
      <div class="flashcards-container">
        <div class="flashcard-header">
          <span class="fc-domain">🛡️ ${card.domain} &bull; <em>${card.topic}</em></span>
          <span class="fc-counter">${isEn ? "Card" : "Tarjeta"} ${state.flashcardIndex + 1} / ${cards.length}</span>
        </div>

        <div class="flashcard-scene" id="fc-scene" title="${isEn ? "Click to flip card" : "Hacé click para dar vuelta la tarjeta"}">
          <div class="flashcard-card ${flippedClass}" id="fc-card">
            <!-- Front Face: Question -->
            <div class="flashcard-face front">
              <span class="fc-badge">❓ ${isEn ? "Question / Scenario" : "Pregunta / Desafío"}</span>
              <div class="fc-body">${card.front}</div>
              <div class="fc-hint">🔄 ${isEn ? "Click card or 'Flip' button to reveal official answer" : "Hacé click o tocá 'Voltear' para ver la respuesta oficial"}</div>
            </div>
            <!-- Back Face: Answer -->
            <div class="flashcard-face back">
              <span class="fc-badge">✅ ${isEn ? "Official Answer & Concept" : "Respuesta Oficial & Concepto"}</span>
              <div class="fc-body">${card.back}</div>
              <div class="fc-hint">💡 ${isEn ? "Official AWS Skill Builder SAA-C03 Knowledge Check" : "Verificación oficial de conocimientos AWS Skill Builder SAA-C03"}</div>
            </div>
          </div>
        </div>

        <div class="flashcard-controls">
          <button class="fc-nav-btn" id="fc-btn-prev" ${state.flashcardIndex === 0 ? "disabled" : ""}>
            ← ${isEn ? "Previous" : "Anterior"}
          </button>
          <button class="fc-flip-btn" id="fc-btn-flip">
            🔄 ${isEn ? "Flip Card" : "Voltear Tarjeta"}
          </button>
          <button class="fc-nav-btn" id="fc-btn-next" ${state.flashcardIndex === cards.length - 1 ? "disabled" : ""}>
            ${isEn ? "Next" : "Siguiente"} →
          </button>
        </div>
      </div>
    `;

    // Event listeners
    const scene = document.getElementById("fc-scene");
    const flipBtn = document.getElementById("fc-btn-flip");
    const prevBtn = document.getElementById("fc-btn-prev");
    const nextBtn = document.getElementById("fc-btn-next");

    function toggleFlip() {
      state.flashcardFlipped = !state.flashcardFlipped;
      const cardEl = document.getElementById("fc-card");
      if (cardEl) {
        cardEl.classList.toggle("flipped", state.flashcardFlipped);
      }
    }

    if (scene) scene.addEventListener("click", toggleFlip);
    if (flipBtn) {
      flipBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFlip();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.flashcardIndex > 0) {
          state.flashcardIndex--;
          state.flashcardFlipped = false;
          renderFlashcards();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (state.flashcardIndex < cards.length - 1) {
          state.flashcardIndex++;
          state.flashcardFlipped = false;
          renderFlashcards();
        }
      });
    }
  }

  // Render Reading View
  function renderReading(day) {
    elReadingView.innerHTML = `
      <div class="reading-container">
        ${day.contentHtml}
        <div class="reading-footer-action">
          <div>
            <h4>¿Terminaste la lectura?</h4>
            <p style="font-size: 0.9rem; color: var(--text-muted);">Demuestra que incorporaste los conceptos aprobando el examen de validación (>= ${window.PORTAL_DATA.passingScorePercent || 72}%).</p>
          </div>
          <button class="btn-primary" id="btn-go-quiz">
            Ir al Examen de Validación ➔
          </button>
        </div>
      </div>
    `;

    document.getElementById("btn-go-quiz").addEventListener("click", () => {
      state.currentTab = "quiz";
      renderDayContent();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Helper to check if question answer is right
  function isQuestionCorrect(q, userAns) {
    if (userAns === undefined || userAns === null) return false;
    if (q.multi) {
      if (!Array.isArray(userAns)) return false;
      const expected = q.correctAnswers || [];
      if (userAns.length !== expected.length) return false;
      return expected.every(ans => userAns.includes(ans));
    } else {
      return userAns === q.correctAnswer;
    }
  }

  // Render Quiz View
  function renderQuiz(day) {
    const isCompleted = !!state.completedDays[day.id];
    let html = `
      <div class="quiz-container">
        <div class="quiz-intro-card">
          <div>
            <strong style="color:var(--aws-squid-ink); font-size:1.05rem;">🎯 Examen de Validación Oficial SAA-C03:</strong>
            <div style="font-size:0.9rem; color:var(--text-muted); margin-top:4px;">
              ${day.quiz.length} preguntas de escenario arquitectónico • Simulación de complejidad Pearson VUE
            </div>
          </div>
          <div>
            <span class="tag" style="background:#fff3de; color:#d97f00; font-weight:700; border:1px solid #ff9900;">Corte de Aprobación: ${window.PORTAL_DATA.passingScorePercent}%</span>
          </div>
        </div>
    `;

    day.quiz.forEach((q, idx) => {
      const selected = state.selectedAnswers[q.id];
      const isCorrect = isQuestionCorrect(q, selected);
      let cardStatus = "";
      if (state.quizEvaluated) {
        cardStatus = isCorrect ? "has-success" : "has-error";
      }

      const isMulti = !!q.multi;
      const requiredCount = isMulti ? (q.correctAnswers ? q.correctAnswers.length : 2) : 1;

      html += `
        <div class="question-card ${cardStatus}" id="card-${q.id}">
          <div class="question-header">
            <div style="display:flex; align-items:center; gap:8px;">
              <span style="font-weight:700; color:var(--aws-squid-ink);">Pregunta ${idx + 1} de ${day.quiz.length}</span>
              ${isMulti ? `<span class="tag" style="background:#e4f6ee; color:#12805c; font-weight:700; border:1px solid #12805c;">Selecciona ${requiredCount} opciones</span>` : `<span class="tag" style="background:var(--bg-light); color:var(--text-muted);">Opción única</span>`}
            </div>
            ${q.scenarioTag ? `<span class="tag" style="background:var(--aws-squid-ink); color:#fff; font-size:0.75rem;">${q.scenarioTag}</span>` : ""}
          </div>
          <div class="question-text">${q.question}</div>
          <div class="options-list">
      `;

      q.options.forEach((opt, optIdx) => {
        let isOptionSelected = false;
        if (isMulti) {
          isOptionSelected = Array.isArray(selected) && selected.includes(optIdx);
        } else {
          isOptionSelected = selected === optIdx;
        }

        let optClass = "";
        if (isOptionSelected) optClass += " selected";
        if (state.quizEvaluated) {
          const isExpected = isMulti ? (q.correctAnswers || []).includes(optIdx) : q.correctAnswer === optIdx;
          if (isExpected) optClass += " is-correct";
          else if (isOptionSelected) optClass += " is-incorrect";
        }

        const inputType = isMulti ? "checkbox" : "radio";

        html += `
          <label class="option-item ${optClass}" data-qid="${q.id}" data-opt="${optIdx}" data-multi="${isMulti ? "1" : "0"}">
            <input type="${inputType}" name="opt-${q.id}" value="${optIdx}" ${isOptionSelected ? "checked" : ""} ${state.quizEvaluated ? "disabled" : ""}>
            <span class="option-text">${opt}</span>
          </label>
        `;
      });

      html += `</div>`;

      // Show explanation if evaluated
      if (state.quizEvaluated) {
        html += `
          <div class="explanation-box">
            <strong style="color: ${isCorrect ? "#12805c" : "#c0352b"};">
              ${isCorrect ? "✅ ¡Respuesta Correcta!" : "❌ Respuesta Incorrecta"}
            </strong><br>
            <div style="margin-top:6px; line-height:1.5;">${q.explanation}</div>
          </div>
        `;
      }

      html += `</div>`;
    });

    // Quiz action buttons & Results
    if (state.quizEvaluated) {
      const scoreData = calculateScore(day);
      const passed = scoreData.percent >= window.PORTAL_DATA.passingScorePercent;

      html = `
        <div class="result-banner ${passed ? "passed" : "failed"}">
          <div class="result-title">${passed ? "🎉 ¡Felicitaciones! Has aprobado el examen de validación" : "❌ No alcanzaste el puntaje requerido para desbloquear"}</div>
          <div class="result-score ${passed ? "pass" : "fail"}">${scoreData.correct} / ${day.quiz.length} (${scoreData.percent}%)</div>
          <p>${passed ? "Excelente dominio conceptual del escenario. El siguiente módulo ha sido desbloqueado exitosamente." : "Los exámenes de AWS exigen precisión en escenarios reales. Revisa las explicaciones técnicas arriba y vuelve a intentarlo para asegurar el conocimiento."}</p>
          <div style="display:flex; gap: 1rem; margin-top: 0.5rem; flex-wrap:wrap;">
            ${
              passed && getNextDay(day.id)
                ? `<button class="btn-primary" id="btn-next-day">Avanzar al ${getNextDay(day.id).title} ➔</button>`
                : ""
            }
            <button class="btn-secondary" id="btn-retry">Reintentar Examen ↺</button>
            <button class="btn-secondary" id="btn-back-reading">Repasar Lectura 📖</button>
            <a href="simulator/?lang=${currentLang}" target="_blank" class="btn-primary" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px;">⏱️ Ir al Simulador Completo (65 Qs)</a>
          </div>
        </div>
      ` + html;
    } else {
      html += `
        <div class="quiz-actions">
          <button class="btn-secondary" id="btn-back-reading-bottom">← Volver al Material</button>
          <button class="btn-primary" id="btn-submit-quiz">Evaluar Respuestas y Validar Conocimiento</button>
        </div>
      `;
    }

    html += `</div>`;
    elQuizView.innerHTML = html;

    // Attach listeners
    if (!state.quizEvaluated) {
      const quizMap = new Map(day.quiz.map(q => [String(q.id), q]));

      function syncCardSelectionUI(cardEl, q, currentSel) {
        if (!cardEl) return;
        const isMulti = !!q.multi;
        cardEl.querySelectorAll(".option-item").forEach(optEl => {
          const idx = parseInt(optEl.getAttribute("data-opt"), 10);
          const isChecked = isMulti
            ? Array.isArray(currentSel) && currentSel.includes(idx)
            : currentSel === idx;
          optEl.classList.toggle("selected", isChecked);
          const inp = optEl.querySelector("input");
          if (inp) inp.checked = isChecked;
        });
      }

      function handleOptionToggle(item, optIdx, fromInput) {
        const qId = item.getAttribute("data-qid");
        const q = quizMap.get(String(qId));
        if (!q) return;
        const isMulti = !!q.multi;
        const cardEl = document.getElementById(`card-${qId}`);

        if (isMulti) {
          const req = (q.correctAnswers || []).length || 2;
          let current = state.selectedAnswers[qId] || [];
          if (!Array.isArray(current)) current = [];
          if (current.includes(optIdx)) {
            current = current.filter(x => x !== optIdx);
          } else {
            if (current.length >= req) {
              if (fromInput) {
                const inp = item.querySelector("input");
                if (inp) inp.checked = false;
              }
              const tagEl = cardEl && cardEl.querySelector(".question-header .tag");
              if (tagEl) {
                tagEl.style.transition = "transform 0.15s";
                tagEl.style.transform = "scale(1.08)";
                setTimeout(() => { tagEl.style.transform = "none"; }, 180);
              }
              return;
            }
            current = [...current, optIdx];
          }
          state.selectedAnswers[qId] = current;
          syncCardSelectionUI(cardEl, q, current);
        } else {
          state.selectedAnswers[qId] = optIdx;
          syncCardSelectionUI(cardEl, q, optIdx);
        }
      }

      document.querySelectorAll(".option-item").forEach(item => {
        item.addEventListener("click", e => {
          if (e.target.tagName.toLowerCase() === "input") return;
          e.preventDefault();
          const optIdx = parseInt(item.getAttribute("data-opt"), 10);
          handleOptionToggle(item, optIdx, false);
        });
      });

      document.querySelectorAll(".option-item input").forEach(input => {
        input.addEventListener("change", () => {
          const item = input.closest(".option-item");
          const optIdx = parseInt(item.getAttribute("data-opt"), 10);
          handleOptionToggle(item, optIdx, true);
        });
      });

      document.getElementById("btn-submit-quiz").addEventListener("click", () => {
        // Verify all answered (including exact count for multi-select questions)
        const unanswered = day.quiz.filter(q => {
          const ans = state.selectedAnswers[q.id];
          if (ans === undefined || ans === null) return true;
          if (q.multi) {
            const req = (q.correctAnswers || []).length || 2;
            if (!Array.isArray(ans) || ans.length !== req) return true;
          }
          return false;
        });

        if (unanswered.length > 0) {
          alert(`Por favor responde todas las preguntas (${unanswered.length} pendiente(s)) antes de evaluar.`);
          return;
        }

        evaluateQuiz(day);
      });

      document.getElementById("btn-back-reading-bottom").addEventListener("click", () => {
        state.currentTab = "reading";
        renderDayContent();
      });
    } else {
      const btnNext = document.getElementById("btn-next-day");
      if (btnNext) {
        btnNext.addEventListener("click", () => {
          const next = getNextDay(day.id);
          if (next) selectDay(next.id);
        });
      }
      document.getElementById("btn-retry").addEventListener("click", () => {
        state.quizEvaluated = false;
        state.selectedAnswers = {};
        renderQuiz(day);
      });
      document.getElementById("btn-back-reading").addEventListener("click", () => {
        state.currentTab = "reading";
        renderDayContent();
      });
    }
  }

  // Calculate Score
  function calculateScore(day) {
    let correct = 0;
    day.quiz.forEach(q => {
      if (isQuestionCorrect(q, state.selectedAnswers[q.id])) {
        correct++;
      }
    });
    const percent = Math.round((correct / day.quiz.length) * 100);
    return { correct, total: day.quiz.length, percent };
  }

  // Evaluate Quiz
  function evaluateQuiz(day) {
    state.quizEvaluated = true;
    const score = calculateScore(day);

    if (score.percent >= window.PORTAL_DATA.passingScorePercent) {
      // Mark as completed
      state.completedDays[day.id] = {
        score: score.percent,
        completedAt: new Date().toISOString()
      };

      // Unlock next day
      const next = getNextDay(day.id);
      if (next && !state.unlockedDays.includes(next.id)) {
        state.unlockedDays.push(next.id);
      }

      saveProgress();
      renderSidebar();
      triggerConfetti();
    }

    renderQuiz(day);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Confetti Animation Effect
  function triggerConfetti() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];
    const colors = ["#ff9900", "#38bdf8", "#22c55e", "#f59e0b", "#ec4899", "#8b5cf6"];
    for (let i = 0; i < 90; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        velY: Math.random() * 3 + 2,
        velX: (Math.random() - 0.5) * 3,
        rot: Math.random() * 360
      });
    }

    let frame = 0;
    function anim() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pieces.forEach(p => {
        p.y += p.velY;
        p.x += p.velX;
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });
      frame++;
      if (frame < 120) {
        requestAnimationFrame(anim);
      } else {
        canvas.remove();
      }
    }
    requestAnimationFrame(anim);
  }

  // Reset Progress Handler
  elBtnReset.addEventListener("click", () => {
    const confirmMsg = currentLang === "en"
      ? "Are you sure you want to reset all your study and quiz progress?"
      : "¿Estás seguro de que deseas reiniciar todo tu progreso de estudio y exámenes?";
    if (confirm(confirmMsg)) {
      localStorage.removeItem(STORAGE_KEY);
      state = {
        unlockedDays: [1],
        completedDays: {},
        currentDayId: 1,
        currentTab: "reading",
        flashcardIndex: 0,
        flashcardFlipped: false,
        selectedAnswers: {},
        quizEvaluated: false
      };
      saveProgress();
      renderSidebar();
      renderDayContent();
    }
  });

  // Tab switching
  elTabReading.addEventListener("click", () => {
    state.currentTab = "reading";
    renderDayContent();
  });

  if (elTabFlashcards) {
    elTabFlashcards.addEventListener("click", () => {
      state.currentTab = "flashcards";
      renderDayContent();
    });
  }

  elTabQuiz.addEventListener("click", () => {
    state.currentTab = "quiz";
    renderDayContent();
  });

  // Language switcher listeners
  const btnLangEs = document.getElementById("btn-lang-es");
  const btnLangEn = document.getElementById("btn-lang-en");
  if (btnLangEs) {
    btnLangEs.addEventListener("click", () => setLanguage("es"));
  }
  if (btnLangEn) {
    btnLangEn.addEventListener("click", () => setLanguage("en"));
  }


  // Free Mode (Unlock All Days) & Backup Export/Import
  const btnUnlockAll = document.getElementById("btn-unlock-all");
  if (btnUnlockAll) {
    btnUnlockAll.addEventListener("click", () => {
      const allIds = getAllDays().map(d => d.id);
      if (state.unlockedDays.length < allIds.length) {
        state.unlockedDays = allIds;
        saveProgress();
        renderSidebar();
        alert(currentLang === "en"
          ? "🔓 Free Mode enabled: All 19 study modules have been unlocked for direct review."
          : "🔓 Modo Libre activado: Los 19 módulos de estudio han sido desbloqueados para repaso directo.");
      } else {
        const completedIds = Object.keys(state.completedDays).map(Number);
        const unlocked = new Set([1, ...completedIds]);
        completedIds.forEach(id => {
          const next = getNextDay(id);
          if (next) unlocked.add(next.id);
        });
        state.unlockedDays = Array.from(unlocked);
        if (!state.unlockedDays.includes(state.currentDayId)) {
          state.currentDayId = Math.max(...state.unlockedDays);
          state.selectedAnswers = {};
          state.quizEvaluated = false;
        }
        saveProgress();
        renderSidebar();
        renderDayContent();
        alert(currentLang === "en"
          ? "🔒 Progressive Mode restored based on your passed quizzes."
          : "🔒 Modo Progresivo restaurado según tus exámenes aprobados.");
      }
    });
  }

  const btnExportPortal = document.getElementById("btn-export-portal");
  if (btnExportPortal) {
    btnExportPortal.addEventListener("click", () => {
      const choice = prompt(
        currentLang === "en"
          ? "Type 'E' to Export your progress to a JSON file, or 'I' to Import a backup:"
          : "Escribe 'E' para Exportar tu progreso a un archivo JSON, o 'I' para Importar un respaldo:",
        "E"
      );
      if (!choice) return;
      if (choice.trim().toUpperCase() === "E") {
        const payload = {
          app: "saa-c03-portal",
          exportedAt: new Date().toISOString(),
          portalState: {
            unlockedDays: state.unlockedDays,
            completedDays: state.completedDays,
            currentDayId: state.currentDayId
          }
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "saa-c03-portal-backup-" + new Date().toISOString().slice(0, 10) + ".json";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      } else if (choice.trim().toUpperCase() === "I") {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "application/json,.json";
        input.onchange = async () => {
          try {
            const text = await input.files[0].text();
            const parsed = JSON.parse(text);
            const ps = parsed.portalState || parsed;
            if (Array.isArray(ps.unlockedDays) && ps.completedDays) {
              state.unlockedDays = ps.unlockedDays;
              state.completedDays = ps.completedDays;
              state.currentDayId = ps.currentDayId || 1;
              saveProgress();
              renderSidebar();
              renderDayContent();
              alert("✅ Progreso importado exitosamente.");
            } else {
              alert("❌ El archivo JSON no tiene un formato de respaldo válido.");
            }
          } catch (err) {
            alert("❌ Error al leer el archivo de respaldo.");
          }
        };
        input.click();
      }
    });
  }

  // Keyboard shortcuts for Flashcards (Space = flip, Left/Right = prev/next)
  document.addEventListener("keydown", (e) => {
    if (state.currentTab !== "flashcards" || /input|textarea|select/i.test(e.target.tagName)) return;
    const cards = (window.OFFICIAL_FLASHCARDS && window.OFFICIAL_FLASHCARDS[currentLang]) || [];
    if (!cards.length) return;
    if (e.code === "Space") {
      e.preventDefault();
      state.flashcardFlipped = !state.flashcardFlipped;
      const cardEl = document.getElementById("fc-card");
      if (cardEl) cardEl.classList.toggle("flipped", state.flashcardFlipped);
    } else if (e.key === "ArrowRight" && state.flashcardIndex < cards.length - 1) {
      e.preventDefault();
      state.flashcardIndex++;
      state.flashcardFlipped = false;
      renderFlashcards();
    } else if (e.key === "ArrowLeft" && state.flashcardIndex > 0) {
      e.preventDefault();
      state.flashcardIndex--;
      state.flashcardFlipped = false;
      renderFlashcards();
    }
  });

  // Initialization
  loadProgress();
  updateLanguageUI();
  renderSidebar();
  renderDayContent();
})();
