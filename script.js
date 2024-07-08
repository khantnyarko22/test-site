const quizData = [{
        passage: `<p>次の（１）から（５）の文章を読んで、質問に答えてください。答えは１．２．３．４から、いちばんいいものをーつ選んでください。</p>
              <img src="image/q01.png" alt="Image Description" class="question-image">`,
        questions: [{
                question: "1．石川さんさんは、来週、何をすると言っていますか。",
                options: ["アリさんにほんを2冊返します。", 　"アリさんにほんを３冊返します。",
                    "アリさんにほんを２冊貸します。",
                    "アリさんにほんを３冊貸します。"
                ],
                answer: 3
            },
            // Add more questions as needed
        ]
    },
    {
        passage: `<img src="image/q02.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "2．このお知らせから、公園についてわかることは何ですか。",
            options: ["午後10時に公園に入ってもいいですか。",
                "入り口にオートバイを止めてはいけません。。",
                "サッカーの練習をしてはいけません。",
                "たばこを吸ってもいいです。"
            ],
            answer: 2
        }, ]
    },
    {
        passage: `<img src="image/q03.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "3．トムさんは、山田先生に何を知らせなければなりませんか。",
            options: ["約束を明日に変えられるかどうか。",
                "約束をあさってに変えられるかどうか。",
                "トムさんの明日午後の都合",
                "トムさんのあさっての午前の都合"
            ],
            answer: 1
        }, ]
    },
    {
        passage: `<img src="image/q04.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "４．石川さんの仕事ではないものは何ですか。",
            options: ["相談に来た人に本について紹介します。",
                "本を置く場所はどこがいいか、考えます。",
                "新聞にのっている、よい本の紹介文をさがします。",
                "小さな子どもたちに、いろいろな絵本を読見ます。"
            ],
            answer: 2
        }, ]
    },
    {
        passage: ` <img src="image/q05.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "1．どんなホテルにとまりますか。",
            options: ["山の中の大きなホテル", 　"古いが、中はきれいなホテル",
                "テレビやゲームが楽しめるホテル",
                "いろいろなものがあって、便利なホテル"
            ],
            answer: 1
        }, ]
    },
    {
        passage: `
      <img src="image/q05.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "２．駅からホテルまでどうやって行きますか。",
            options: [" 駅から30分バスに乗って、バス停から2時間以上歩きました。", 　" 駅から30分バス停まで歩いて、バスに2時間以上乗りました。",
                "駅から2時間近くバスに乗って、バス停から30分以上歩きました。",
                "駅から2時間以上バスに乗って、バス停から30分近く歩きました。"
            ],
            answer: 3
        }, ]
    }, {
        passage: `
    <img src="image/q05.png" alt="Image Description" class="question-image">`,
        questions: [{
            question: "３．こんな生活とありますが、どんな生活ですか。",
            options: [" 山で遊んだり、昼寝をしたりする生活", 　" ゲームをしたり、虫をとったりする生活",
                "散歩をしたり、テレビを見たりする生活",
                "おいしいものを食べて、何もしない生活"
            ],
            answer: 0
        }, ]
    },

];