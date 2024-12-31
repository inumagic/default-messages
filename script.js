document.addEventListener("DOMContentLoaded", () => {
    const mainMenu = document.getElementById("main-menu");
    const subMenu = document.getElementById("sub-menu");
    const contentDisplay = document.getElementById("content-display");
    const procedureTitle = document.getElementById("procedure-title");
    const stageTitle = document.getElementById("stage-title");
    const contentList = document.getElementById("content-list");

    const procedureData = {
        P: {
            name: "P假牙",
            before: [
                "P11 全瓷冠-費用",
                "P12 為甚麼您們的全瓷牙冠(前牙區)價格",
                "P13 為甚麼您們的全瓷牙冠(後牙區)",
                "P14 全瓷牙冠如何選顏色?",
                "P15 全瓷冠患者要用泡泡原因",
                "P19 除了全瓷牙冠 還有沒有其他選擇",
                "P41 根管治療後 柱心牙冠說明L.P",
                "P6 生物合金牙冠",
                "P9 為甚麼抽完神經過後的牙齒要做假牙?",
                "P95 一白遮三醜???最高的竟是你看不出你",
                "P96 牙科大迷思：空間不足!做假牙",
                "P93 OP或已初診諮詢過的患者問假牙費用",
                "P22 3D齒雕價位",
                "P21 大、中、小蛀牙(3D齒雕)",
                "P92 有診所使用CEREC系統，一天就可做好",

            ],
            during: [
                "P23 齒雕捕的QQ掉了",
                "P91 花了那麼多錢做假牙，為甚麼還要收掛號費",
                "P94 太久沒來裝牙",

            ],
            after: [
                "P7 牙橋清潔影片",
                "P18 全瓷牙冠-咬裂",

            ]
        },
        CLS: {
            name: "CLS牙齦整形術",
            before: ["CLS3 術前"],
            during: [
                "CLS7 牙冠增長怎麼壓"
            ],
            after: [
                "CLS2 回傳口內牙齦照",
                "CLS1 牙根增長術後患者如何按壓",

                "CLS4 (牙齦整形術)患者回復有滲血",
                "CLS5 (牙齦整形術)追縱關心罐頭簡訊",
                "CLS6 前牙 牙齦修型術後照顧"
            ]
        },
        I: {
            name: "I植牙",
            before: [
                "I1 植牙迷思",
                "I2 植牙六部曲",
                "I3 植體費用",
                "I25 預約補骨",
                "I4請問第一次植牙要大概多久時間? ",
                "I5 希望盡量縮短療程的時間 請問植牙",
                "I6 植牙(前)活血",
                "I7 讓世界都看見(導航儀)",
                "I8 導航儀匯款",
                "I9 導航儀取消須知",
                "I11 植牙前關心訊息(潘院長提供 微調整)"
            ],
            during: [],
            after: [
                "I10 術後",
                "I12 植牙後追縱關心罐頭簡訊",
                "I13 植牙後注意事項",
                "I16 植牙印模測骨質密度",
                "I17 請問植牙的保固期是多久呢?",
                "I19 植牙牙冠要開洞的詢問方式",
                "I20 為何植牙牙冠有個洞就是為了螺絲鬆",
                "I21 植牙保養追縱",
                "I22 定期植體保養",
                "I23 植牙優免雷射一萬",
                "I24 雷射植體保養(報價P)",
            ]
        },

        F:{
            name:"追縱回診",
            before:[],
            during:[],
            after:[
                "F1 NP追縱",
                "F2 65歲以上回診",
                "F3請患者回來拿收據",
                "F4請患者回來重新口掃",
                "F5追縱半年回診 罐頭簡訊(全) ",
                "F6 約診時間段",
            ],
        },

        OSA:{
            name:"OSA呼吸中止",
            before:[
                "OSA1 呼吸中止租借",
                "OSA2呼吸中止睡眠測試",
            ],
            during:[],
            after:[

            ],
        },

        MRC:{
            name:"MRC擋舌器",
            before:[
                "MRC2擋舌器文章",
                "MRC11 MRC費用",
                "MRC13 建議配戴擋舌器與舌繫帶",
                "MRC14《整體醫學新知》MRC",

            ],
            during:[
                "MRC3配戴",
                "MRC4擋舌器-配戴注意事項",
                "MRC5擋舌器-不按時回診又超過療程時間 ",
                "MRC6擋舌器-療程內6個月到期(發一次)",
                "MRC7 潘院長教大家如何配戴擋舌器",
                "MRC8 擋舌器-配戴時感到疼痛",
                "MRC9 擋舌器-療程內6個月追蹤患者(每月發的)",
                "MRC10 舌繫帶處理MRC",
                "MRC12 擋舌器定期追蹤",
                "",
            ],
            after:[
                "",
            ],
        },

        W:{
            name:"W牙齒美白",
            before:[
                "W1居家美白使用說明",
            ],
            during:[],
            after:[

            ],
        },

        A:{
            name:"A潔牙泡泡",
            before:[
                "A1小孩幾歲可以使用安心型潔牙泡泡",
                "A2第一集 原來這才叫正確刷牙! ",
                "A3潔牙泡泡最新110/01/05 ",
                "A4 邀請加入潔牙泡泡官方LINE",
                "A5 臨床實驗牙膏的化學物不可",
                "A6牙菌斑影片-已加潘醫師版本",
                "A7 MRC及牙托清潔",
                "A8 潔牙泡泡匯款資訊.寄送",
                "A9 99%的是受牙膏都含有SLS類的化學",
                "A10 不使用SLS",
                "A11 潔牙泡泡中秋活動",
             

            
            ],
            during:[

            ],
            after:[

            ],
        },
        
        E:{
            name:"E拔牙",
            before:[
                "E1自費拔牙",
                "E2預約北醫口腔外科黃醫師",
                "E3骨膠原蛋白費用",
              
              


            ],
            during:[
                "E5 牙周雷射+拔牙+CLS ",
            ],
            after:[
                "E4 術後追蹤-拔牙",

            ],
        },
        R: {
            name: "其他注意事項 (R)",
            before: [
                "R1長療程提醒",
                "R3調病歷",
                "R14活動牙製作須知與注意事項",
                "R18第一次來植牙的患者注意事項",
                "R23未簽約診聲明臨時改約患者",
                "R24舒眠麻醉資料填寫	",
                "R25幸福腦分享+潘醫師聊天室內照片",
                "R26魔法牙醫官網_右上可加入官方帳號(L)",
                "R27 魔法牙醫地址",
                "R30教患者如何壓X光片",
                "R31為因應新冠病毒及流感訊息",
                "R33生命中不能承受之重",
                "R34請廠商加入魔法廠商(L)",
                "R35患者只想做健保療程",

            ],
            during: [
               
            ],
            after: [
                "R4臨時牙(墊高)注意事項",
                "R5裝全瓷冠及貼片注意事項",
                "R6 OD健保療程候診注意事項",
                "R7健保補牙-先自費押金後補申報",
                "R8健保補牙-超過兩年才可以健保給付",
                "R9前段由其他醫師處理療程",
                "R11裝植牙全瓷牙冠注意事項",
                "R12癒合帽(植體上鎖的蓋子)之清潔方式",
                "R15植牙後注意事項",
                "R16臨時牙注意事項",
                "R17術後提醒患者多吃保健食品罐頭簡訊",
                "R19患者請我們將收據寄給他",
                "R20診斷證明書發送後",
                "R36診斷證明(確認個人資料)",
                "R37 舌繫帶注意事項",
                "",

                "R15 植牙後注意事項",
                "R17 術後提醒患者多吃保健食品罐頭簡訊",
                "R18 第一次來植牙的患者注意事項"
            ]
        },


        PE: {
            name: "PE牙周",
            before: [
                "PE1 牙周病有機會根治",
                "PE2 牙周病真的治不好嗎?",
                "PE3 糖尿病與牙周病的關係",
                "PE4 暴牙 牙周病竟是舌頭惹的禍"
            ],
            during: ["PE5 水雷射妖魔化"],
            after: [
                "PE6 術後 牙周雷射/後牙牙冠增長術後照顧",
                "PE7 牙周雷射後追縱關心罐頭簡訊",
                "PE8 牙周統合追縱",
                "PE9 牙統第三階段回診(罐頭簡訊)"
            ]
        },
       
        IA: {
            name: "IA隱型矯正",
            before: [
                "IA1 加入矯正官方帳號",
                "IA2 NP隱形矯正PPT",
                "IA3 歐耐恩匯款帳號",
                "IA4 隱形矯正-確認動畫",
                "IA5 隱形矯正-修縫頭期款",
                "IA6 隱形矯正-確認方案"
            ],
            during: [
                "IA7 當天上完ATT後注意事項",
                "IA8 隱形矯正-提醒配戴注意事項",
                "IA9 隱形矯正通知患者要告知",
                "IA10 牙托配戴注意事項",
                "IA11 矯正洗牙",
                "IA12 牙托匯款提醒",
                "IA13提醒定期回診",
                "IA14 隱形矯正-黏ATT",
                "IA15 ATT (若是ATT+IA也要傳罐頭)",
                "IA16拿IA(若是ATT+IA也要傳ATT罐頭)",
                "IA17隱形矯正-拿IA",
                "IA18 患者回傳拿第幾副牙托",
                "IA19 領牙托",
                "IA20 領牙托流程",
                "IA21 歐耐恩寄牙托",
                "IA22 牙托配戴進度",
                "IA23 正確咬合",
                "IA24 上顎中線美學",
                "IA25 倒數第二副",
               
                

            ],
            after: [
                "IA26 歐耐恩維持器活動",
                "IA27 不參加歐奈恩好評送維持器活動",
                "IA28 診所好評活動",
                "IA29 隱形矯正-結案回診",
                "IA30矯正google map",
                "IA31 YA提醒矯正半年即將過期",
                "IA32 不參加歐耐恩好評送維持器活動",
                "IA33 隱形矯正患者提醒患者定期回診",
                "IA34 Yasmile維持器活動",
                "IA35 YSAMILE傳動畫給患者",
                "IA36 Yasmile上牙套須知"
            ]
        },

        M5:{
            name:"M5費用",
            before:[
                "M51退款流程",
                "M510給患者匯款帳號後的回覆",
                "M511NP詢問付費方式",
                "M512NP詢問價錢回復",
                "M513表面價格文章",
                "M514 患者問可以刷卡嗎？",
                "",
                "",
            ],
            during:[

            ],
            after:[

            ],
        },


        ORTHO: {
            name: "ORTHO傳統矯正",
            before: [
                "O1 傳統矯正清潔",
                "O2 矯正掛號",
                "O4 NP詢問ORTHO療程時間回復",
                "O5 NP詢問ORTHO療程及費用回復",
                "O8 兒童矯正",
            ],
            during: [
                "O3 矯正白臘使用方式",
                "O6 第一次上矯正器費用",
                "O7 植完骨釘後追縱關心"
            ],
            after: [
                "O9 關於矯正出現的三角縫",
                "O10 傳統矯正分期付款須知"
            ]
        },

        ENDO:{
            name:"ENDO顯微根管",
            before:[
                "ENDO顯微根管治療與一般根管治療的差別",
            ],
            during:[],
            after:[

            ],
        },

        IM:{
            name:"國際醫療",
            before:[
                "IM1國際醫療-待P確認",
                "IM2國外患者預約療程先匯款",
                "IM3 國際醫療",

            ],
            during:[],
            after:[

            ],
        },

        NP: {
            name: "NP新患者",
            before: [
                "NP1 語音",
                "NP2 魔法牙醫地址",
                "NP3 指定醫師，共同看診回復",
                "NP4 診所消毒不看診",
                "NP5 詢問營業時間的回覆",
                "NP6 加入LINE@後的回覆",
                "NP7 線上約診-沒健保卡",
                "NP8 線上約診-有健保卡",
                "NP9 NP四部曲",
                "NP10 NP初診200元掛號費",
                "NP11 牙痛NP罐頭簡訊",
                "NP13 新患者發_提醒未必可即時回復L.P",
                "NP14 拿東西脫手套(新患者要傳)",
                "NP15 怎麼到診所",
                "NP16 自費患者為何需要掛號費"
            ],
            during:[],
            after:[

            ],
        },
        others: {
            name: "其他",
            before: [
                "潘院長溫馨公告",
                "三合一懶人包",
                "健保門診話術罐頭簡訊",
                "臨時改約",
                "患者殺價的罐頭簡訊",
                "何時可拿到照片/x光片/申請要等多久",
                "提醒預約通知患者",
                "錄製診療感言",
                "錄製真實感言V.V_Q&A(VV2)",
                "邀請錄製真實感言V.V(1)",
                "邀請患者GOOGLE MAP",
                "防疫影片",
                "陳美鳳文章",
                "墳場文章",
                "看好你的牙 第十二集",
                "看好你的牙 第十一集",
                "看好你的牙 第十集",
                "看好你的牙 第九集",
                "看好你的牙 第八集",
                "看好你的牙 第七集",
                "看好你的牙 第六集",
                "看好你的牙 第五集",
                "看好你的牙 第四集",
                "看好你的牙 第二集",
                "沖牙機使用影片",
                "經皮毒",
                "牙齦",
                "X光",
            ],
            during:[],
            after:[

            ],
        },
        QA: {
            name: "魔法兒童矯正QA",
            before: [
                "Q1. 初診可以來做什麼?",
                "Q2. 什麼是新式矯正?",
                "Q3. 兒童矯正是換牙前矯正後，換牙完還需要再矯正一次嗎？",
                "Q4. 費用方面是一次付清嗎？",
                "Q5. 我們不住在台北，回診怎麼辦?",
                "Q6. 我的⼩孩X歲可以嗎?",
                "Q7. 我的⼩孩已經是青少年也可以嗎?",
                "Q8. 費用方面是一次付清嗎？",
                "Q9. 隱形牙套是做隱適美嗎?",
            ],
            during:[],
            after:[

            ],
        }
    };

    mainMenu.addEventListener("click", (event) => {
        if (event.target.classList.contains("procedure-button")) {
            const procedureKey = event.target.dataset.procedure;
            const procedure = procedureData[procedureKey];
            if (procedure) {
                procedureTitle.textContent = procedure.name;
                subMenu.style.display = "block";
                contentDisplay.style.display = "none";
            }
        }
    });

    subMenu.addEventListener("click", (event) => {
        if (event.target.classList.contains("sub-button")) {
            const stageKey = event.target.dataset.stage;
            const procedureKey = Object.keys(procedureData).find(
                key => procedureData[key].name === procedureTitle.textContent
            );
            const procedure = procedureData[procedureKey];
            if (procedure && procedure[stageKey]) {
                stageTitle.textContent = `${procedure.name} - ${event.target.textContent}`;
                contentList.innerHTML = procedure[stageKey].map(item => `<li>${item}</li>`).join("");
                contentDisplay.style.display = "block";
            }
        }
    });
});
