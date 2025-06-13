const questions = [
    {
        text: "Q1. Google Chromeを知っていますか？",
        options: ["はい", "いいえ"],
    },
    {
        text: "Q2. Google Chromeを使用したことがありますか？",
        options: ["よく使っている", "たまに使う", "使ったことがない"],
    },
    {
        text: "Q3. Google Chromeのどこが良いと感じますか？",
        options: ["プライバシー保護", "デザイン性", "動作の軽さ", "特に感じない"],
    },
    ];
    
    let currentIndex = 0;
    const questionText = document.getElementById("question-text");
    const optionsDiv = document.getElementById("options");
    const submitBtn = document.getElementById("submit-btn");
    const progressContainer = document.getElementById("progress-container");
    const progressBar = document.getElementById("progress-bar");
    const sendingText = document.getElementById("sending-text");
    const form = document.getElementById("quiz-form");
    
    function loadQuestion(index) {
        submitBtn.disabled = true;
        progressContainer.style.display = "none";
        sendingText.style.display = "none";
        progressBar.style.width = "0%";
        progressBar.style.animation = "none";
        
        questionText.textContent = questions[index].text;
        optionsDiv.innerHTML = "";
        
        questions[index].options.forEach((option, i) => {
            const id = `option${i}`;
            const label = document.createElement("label");
            label.htmlFor = id;
            
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "answer";
            input.id = id;
            input.value = option;

            const span = document.createElement("span");
            span.textContent = option;
            
            input.addEventListener("change", () => {
                submitBtn.disabled = false;

                // 他のラベルの selected を解除
                document.querySelectorAll("#options label").forEach(l => l.classList.remove("selected"));
                label.classList.add("selected");
            });
            
            label.prepend(input);
            label.appendChild(span);
            optionsDiv.appendChild(label);
        });
    }
    
    form.addEventListener("submit", e => {
        e.preventDefault();
        // 送信中表示
        submitBtn.style.display = "none";
        progressContainer.style.display = "block";
        sendingText.style.display = "block";
        
        progressBar.style.animation = "progressAnim 3s linear forwards";
        
        setTimeout(() => {
            currentIndex++;
            if (currentIndex < questions.length) {
                loadQuestion(currentIndex);
                submitBtn.style.display = "block";
                submitBtn.disabled = true;
            } else {
                // 最後の質問が終わったらlotteryへ遷移
                window.location.href = "../lottery";
            }
        }, 3000);
    });
    
    loadQuestion(currentIndex);