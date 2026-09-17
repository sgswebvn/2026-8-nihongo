import { MilestoneExam } from '../types';

export const MILESTONE_EXAMS: MilestoneExam[] = [
  // --- STAGE 1: BÀI 1 - 5 ---
  {
    id: 'exam_stage_1',
    stageId: 1,
    level: 'N5',
    title: 'Boss Exam 1: Vượt Cột Mốc Nhập Môn (Bài 1 - 5)',
    subtitle: 'Đại từ, đồ vật, nơi chốn, thời gian và phương tiện di chuyển',
    lessonRange: [1, 5],
    timeLimitSeconds: 300,
    minPassScore: 80,
    questions: [
      {
        id: 'q1_1',
        question: 'Chọn từ thích hợp điền vào chỗ trống: わたし _____ ベトナム人です。',
        type: 'sentence-fill',
        options: ['は (wa)', 'が (ga)', 'を (wo)', 'に (ni)'],
        correctIndex: 0,
        explanation: 'Trợ từ は (đọc là wa) dùng sau chủ ngữ trong mẫu câu A は B です.',
        wordId: 'w5_1_1'
      },
      {
        id: 'q1_2',
        question: 'Từ「辞書」có âm Hán Việt và nghĩa là gì?',
        type: 'han-viet',
        options: ['TỪ THƯ - Từ điển', 'THỦ TRƯỚNG - Sổ tay', 'TÂN VĂN - Tờ báo', 'BẢN - Quyển sách'],
        correctIndex: 0,
        explanation: '辞書 (じしょ) = TỪ THƯ = Từ điển.',
        wordId: 'w5_2_2'
      },
      {
        id: 'q1_3',
        question: 'Chọn câu hỏi giá tiền phù hợp trong tiếng Nhật:',
        type: 'word-to-meaning',
        options: ['いくらですか。', 'どこですか。', 'なんじですか。', 'だれですか。'],
        correctIndex: 0,
        explanation: 'いくらですか dùng để hỏi "Giá bao nhiêu tiền?".',
        wordId: 'w5_3_7'
      },
      {
        id: 'q1_4',
        question: 'Câu nào diễn đạt đúng: "7 giờ rưỡi sáng tôi thức dậy"?',
        type: 'sentence-fill',
        options: [
          '朝七時半に起きます。',
          '朝七時半で寝ます。',
          '朝七時半から働きます。',
          '朝七時半を勉強します。'
        ],
        correctIndex: 0,
        explanation: '七時半 (しちじはん) に起きます (おきます) = Thức dậy lúc 7h30.',
        wordId: 'w5_4_4'
      },
      {
        id: 'q1_5',
        question: 'Điền trợ từ phương tiện: 電車 _____ 学校へ行きます。',
        type: 'sentence-fill',
        options: ['で (de)', 'へ (e)', 'に (ni)', 'と (to)'],
        correctIndex: 0,
        explanation: 'Trợ từ で chỉ phương tiện di chuyển (bằng tàu điện).',
        wordId: 'w5_5_7'
      },
      {
        id: 'q1_6',
        question: 'Cách đọc của từ「飛行機」là gì?',
        type: 'kanji-reading',
        options: ['ひこうき', 'ちかてつ', 'じどうしゃ', 'でんしゃ'],
        correctIndex: 0,
        explanation: '飛行機 = ひこうき (Máy bay).',
        wordId: 'w5_5_6'
      },
      {
        id: 'q1_7',
        question: 'Từ「手帳」có nghĩa tiếng Việt là gì?',
        type: 'meaning-to-word',
        options: ['Sổ tay bỏ túi', 'Cái ô', 'Chìa khóa', 'Cặp xách'],
        correctIndex: 0,
        explanation: '手帳 (てちょう) = Sổ tay.',
        wordId: 'w5_2_5'
      },
      {
        id: 'q1_8',
        question: 'Chọn cách nói: "Tôi đi bộ từ ga về nhà":',
        type: 'sentence-fill',
        options: [
          '駅から歩いてうちへ帰ります。',
          '駅で歩いてうちへ来ます。',
          '駅へ歩いてうちから行きます。',
          '駅に歩いてうちへ寝ます。'
        ],
        correctIndex: 0,
        explanation: '歩いて (あるいて) = đi bộ. うちへ帰ります = về nhà.',
        wordId: 'w5_5_10'
      },
      {
        id: 'q1_9',
        question: 'Từ「会社員」chỉ nghề nghiệp nào?',
        type: 'word-to-meaning',
        options: ['Nhân viên công ty', 'Bác sĩ', 'Giáo viên', 'Kỹ sư'],
        correctIndex: 0,
        explanation: '会社員 (かいしゃいん) = Nhân viên công ty.',
        wordId: 'w5_1_6'
      },
      {
        id: 'q1_10',
        question: 'Số 10.000 (mười nghìn) trong tiếng Nhật đọc là:',
        type: 'kanji-reading',
        options: ['いちまん (一万)', 'せん (千)', 'ひゃく (百)', 'じゅう (十)'],
        correctIndex: 0,
        explanation: '一万 (いちまん) = 10.000.',
        wordId: 'w5_3_10'
      }
    ]
  },

  // --- STAGE 2: BÀI 6 - 10 ---
  {
    id: 'exam_stage_2',
    stageId: 2,
    level: 'N5',
    title: 'Boss Exam 2: Động từ, Tính từ & Sự tồn tại (Bài 6 - 10)',
    subtitle: 'Ngoại động từ を, cho nhận あげます/もらいます, tính từ い/な, あります/います',
    lessonRange: [6, 10],
    timeLimitSeconds: 300,
    minPassScore: 80,
    questions: [
      {
        id: 'q2_1',
        question: 'Điền trợ từ thích hợp: レストラン _____ 昼ご飯を食べます。',
        type: 'sentence-fill',
        options: ['で (de)', 'に (ni)', 'へ (e)', 'を (wo)'],
        correctIndex: 0,
        explanation: 'Trợ từ で biểu thị địa điểm diễn ra hành động.',
        wordId: 'w5_6_1'
      },
      {
        id: 'q2_2',
        question: 'Tôi tặng quà cho bạn thân: 友達 _____ プレゼントをあげました。',
        type: 'sentence-fill',
        options: ['に (ni)', 'で (de)', 'を (wo)', 'へ (e)'],
        correctIndex: 0,
        explanation: 'Đối tượng nhận hành động あげます đi với trợ từ に.',
        wordId: 'w5_7_3'
      },
      {
        id: 'q2_3',
        question: 'Dạng phủ định của tính từ「親切な」(thân thiện/tốt bụng) là:',
        type: 'word-to-meaning',
        options: ['親切じゃありません', '親切くないです', '親切でした', '親切くないでした'],
        correctIndex: 0,
        explanation: 'Tính từ đuôi な phủ định bằng cách bỏ な thêm じゃありません.',
        wordId: 'w5_8_1'
      },
      {
        id: 'q2_4',
        question: 'Chọn câu đúng với quy tắc phân biệt あります và います:',
        type: 'sentence-fill',
        options: [
          '庭に犬がいます。机の上に本があります。',
          '庭に犬があります。机の上に本がいます。',
          '庭に犬をいます。机の上を本があります。',
          '庭に犬でいます。机の上で本があります。'
        ],
        correctIndex: 0,
        explanation: 'Động vật/người dùng います, đồ vật/thực vật dùng あります.',
        wordId: 'w5_10_1'
      },
      {
        id: 'q2_5',
        question: 'Từ「上手」có âm Hán Việt và nghĩa là gì?',
        type: 'han-viet',
        options: ['THƯỢNG THỦ - Giỏi, khéo léo', 'HẠ THỦ - Dở, vụng về', 'HẢO - Thích', 'HIỀM - Ghét'],
        correctIndex: 0,
        explanation: '上手 (じょうず) = THƯỢNG THỦ = Giỏi.',
        wordId: 'w5_9_3'
      },
      {
        id: 'q2_6',
        question: 'Từ trái nghĩa của「新しい」(あたらしい - Mới) là gì?',
        type: 'word-to-meaning',
        options: ['古い (ふるい)', '悪い (わるい)', '小さい (ちいさい)', '暑い (あつい)'],
        correctIndex: 0,
        explanation: '新しい (mới) trái nghĩa với 古い (cũ).',
        wordId: 'w5_8_7'
      },
      {
        id: 'q2_7',
        question: 'Chọn câu mang ý nghĩa rủ rê lịch sự: "Cùng uống cà phê nhé?"',
        type: 'sentence-fill',
        options: [
          'コーヒーを飲みませんか。',
          'コーヒーを飲みました。',
          'コーヒーを飲みません。',
          'コーヒーを飲みましょうか。'
        ],
        correctIndex: 0,
        explanation: 'V-ませんか dùng để mời mọc, rủ rê đối phương cùng làm gì.',
        wordId: 'w5_6_2'
      },
      {
        id: 'q2_8',
        question: 'Vị trí「机の上」nghĩa là gì?',
        type: 'meaning-to-word',
        options: ['Trên bàn', 'Dưới gầm bàn', 'Phía sau bàn', 'Trước mặt bàn'],
        correctIndex: 0,
        explanation: '机 (bàn) + 上 (trên) = Trên bàn.',
        wordId: 'w5_10_7'
      },
      {
        id: 'q2_9',
        question: 'Âm Hán Việt của từ「約束」là gì?',
        type: 'han-viet',
        options: ['ƯỚC THÚC (Cuộc hẹn, lời hứa)', 'DỤNG SỰ (Việc bận)', 'LIỆU LÝ (Món ăn)', 'THỜI GIAN (Thời gian)'],
        correctIndex: 0,
        explanation: '約束 (やくそく) = ƯỚC THÚC = Cuộc hẹn, lời hứa.',
        wordId: 'w5_9_10'
      },
      {
        id: 'q2_10',
        question: 'Từ nào sau đây là tính từ đuôi い?',
        type: 'word-to-meaning',
        options: ['暑い (あつい)', '便利 (べんり)', '有名 (ゆうめい)', '親切 (しんせつ)'],
        correctIndex: 0,
        explanation: '暑い (nóng) kết thúc bằng chữ い thuộc tính từ đuôi い.',
        wordId: 'w5_8_10'
      }
    ]
  },

  // --- STAGE 3: BÀI 11 - 15 ---
  {
    id: 'exam_stage_3',
    stageId: 3,
    level: 'N5',
    title: 'Boss Exam 3: Thể て, So sánh & Nhờ vả (Bài 11 - 15)',
    subtitle: 'Lượng từ, so sánh hơn nhất, chia thể て, V-てください, V-てもいいですか',
    lessonRange: [11, 15],
    timeLimitSeconds: 300,
    minPassScore: 80,
    questions: [
      {
        id: 'q3_1',
        question: 'Thể て của động từ「待ちます」(Chờ đợi) là gì?',
        type: 'word-to-meaning',
        options: ['待って (matte)', '待ちて (machite)', '待いで (maide)', '待んで (mande)'],
        correctIndex: 0,
        explanation: 'Động từ nhóm 1 đuôi ち/つ/り chuyển thành って (待つ -> 待って).',
        wordId: 'w5_14_6'
      },
      {
        id: 'q3_2',
        question: 'Câu nào nhờ vả lịch sự: "Xin hãy mở cửa sổ"?',
        type: 'sentence-fill',
        options: [
          '窓を開けてください。',
          '窓を閉めてください。',
          '窓を消してください。',
          '窓を点けてください。'
        ],
        correctIndex: 0,
        explanation: '開ける (あける) = Mở. V-てください = Xin hãy làm gì.',
        wordId: 'w5_14_1'
      },
      {
        id: 'q3_3',
        question: 'Mẫu câu hỏi xin phép: "Tôi hút thuốc ở đây có được không?"',
        type: 'sentence-fill',
        options: [
          'ここでたばこを吸ってもいいですか。',
          'ここでたばこを吸ってはいけません。',
          'ここでたばこを吸ってください。',
          'ここでたばこを吸いましょうか。'
        ],
        correctIndex: 0,
        explanation: 'V-てもいいですか = Được phép làm việc gì không?',
        wordId: 'w5_15_1'
      },
      {
        id: 'q3_4',
        question: 'Từ「簡単」(かんたん) có âm Hán Việt là gì?',
        type: 'han-viet',
        options: ['GIẢN ĐƠN (Đơn giản)', 'CẬN (Gần)', 'VIỄN (Xa)', 'TẢO (Sớm)'],
        correctIndex: 0,
        explanation: '簡単 = GIẢN ĐƠN = Đơn giản.',
        wordId: 'w5_12_1'
      },
      {
        id: 'q3_5',
        question: 'Chọn câu so sánh đúng: "Xe hơi nhanh hơn xe đạp":',
        type: 'sentence-fill',
        options: [
          '車は自転車より速いです。',
          '車は自転車ほど速いです。',
          '車と自転車は速いです。',
          '車がいちばん自転車です。'
        ],
        correctIndex: 0,
        explanation: 'Cấu trúc so sánh hơn: N1 は N2 より Adj です.',
        wordId: 'w5_12_4'
      },
      {
        id: 'q3_6',
        question: 'Muốn diễn đạt mong muốn hành động "Tôi muốn uống nước":',
        type: 'sentence-fill',
        options: [
          '水が / を 飲みたいです。',
          '水がほしいです。',
          '水を飲みます。',
          '水が好きです。'
        ],
        correctIndex: 0,
        explanation: 'V-たいです dùng để biểu thị mong muốn làm hành động của bản thân.',
        wordId: 'w5_13_5'
      },
      {
        id: 'q3_7',
        question: 'Thể て của động từ「急ぎます」(いそぎます - Vội vã) là:',
        type: 'word-to-meaning',
        options: ['急いで (isoide)', '急いて (iseite)', '急って (isotte)', '急んで (isonde)'],
        correctIndex: 0,
        explanation: 'Động từ đuôi ぎ chuyển thành いで (急ぎます -> 急いで).',
        wordId: 'w5_14_5'
      },
      {
        id: 'q3_8',
        question: 'Câu nào mang nghĩa cấm đoán: "Cấm chụp ảnh ở đây!"?',
        type: 'sentence-fill',
        options: [
          'ここで写真を撮ってはいけません。',
          'ここで写真を撮ってもいいです。',
          'ここで写真を撮りましょう。',
          'ここで写真を撮りたいです。'
        ],
        correctIndex: 0,
        explanation: 'V-てはいけません biểu thị điều cấm đoán.',
        wordId: 'w5_15_1'
      }
    ]
  },

  // --- STAGE 4: BÀI 16 - 20 ---
  {
    id: 'exam_stage_4',
    stageId: 4,
    level: 'N5',
    title: 'Boss Exam 4: Thể Nai, Thể Ta & Văn nói (Bài 16 - 20)',
    subtitle: 'Nối câu V-てから, V-ないでください, V-たことがあります, thể thông thường',
    lessonRange: [16, 20],
    timeLimitSeconds: 300,
    minPassScore: 80,
    questions: [
      {
        id: 'q4_1',
        question: 'Chia động từ「行きます」(Đi) sang thể ない:',
        type: 'word-to-meaning',
        options: ['行かない (ikanai)', '行きない (ikinai)', '行けない (ikenai)', '行かぬ (ikanu)'],
        correctIndex: 0,
        explanation: 'Nhóm 1 đổi cột い sang cột あ thêm ない (行きます -> 行かない).',
        wordId: 'w5_17_1'
      },
      {
        id: 'q4_2',
        question: 'Câu nào diễn đạt: "Xin đừng quên hộ chiếu"?',
        type: 'sentence-fill',
        options: [
          'パスポートを忘れないでください。',
          'パスポートを忘れてください。',
          'パスポートを無くしてください。',
          'パスポートを覚えないでください。'
        ],
        correctIndex: 0,
        explanation: 'V-ないでください = Xin đừng làm gì.',
        wordId: 'w5_17_2'
      },
      {
        id: 'q4_3',
        question: 'Diễn đạt kinh nghiệm: "Tôi đã từng leo núi Phú Sĩ":',
        type: 'sentence-fill',
        options: [
          '富士山に登ったことがあります。',
          '富士山に登ります。',
          '富士山に登りたいです。',
          '富士山に登ることができます。'
        ],
        correctIndex: 0,
        explanation: 'V-たことがあります = Đã từng làm việc gì trong quá khứ.',
        wordId: 'w5_19_1'
      },
      {
        id: 'q4_4',
        question: 'Chuyển câu「明日暇ですか」(Ngày mai bạn rảnh không?) sang thể thông thường (văn nói thân mật):',
        type: 'sentence-fill',
        options: ['明日暇？', '明日暇だ？', '明日暇ですか？', '明日暇ない？'],
        correctIndex: 0,
        explanation: 'Trong văn nói thân mật giữa bạn bè, tính từ な / danh từ bỏ です và lên giọng.',
        wordId: 'w5_20_5'
      },
      {
        id: 'q4_5',
        question: 'Câu nào thể hiện khả năng: "Tôi có thể nói tiếng Nhật"?',
        type: 'sentence-fill',
        options: [
          '日本語を話すことができます。',
          '日本語を話したことがあります。',
          '日本語を話さなければなりません。',
          '日本語を話しましょう。'
        ],
        correctIndex: 0,
        explanation: 'V-る (thể từ điển) + ことができます = Có khả năng làm gì.',
        wordId: 'w5_18_1'
      }
    ]
  },

  // --- STAGE 5: BÀI 21 - 25 (TRÙM CUỐI TỐT NGHIỆP N5) ---
  {
    id: 'exam_stage_5',
    stageId: 5,
    level: 'N5',
    title: 'Boss Exam 5: ĐẠI CHIẾN CỘT MỐC TỐT NGHIỆP JLPT N5',
    subtitle: 'Tổng hợp toàn diện 25 bài Minna no Nihongo N5: Điều kiện たら, cho nhận てくれる, định ngữ',
    lessonRange: [21, 25],
    timeLimitSeconds: 360,
    minPassScore: 80,
    questions: [
      {
        id: 'q5_1',
        question: 'Thể hiện ý kiến phỏng đoán cá nhân: "Tôi nghĩ ngày mai trời sẽ mưa":',
        type: 'sentence-fill',
        options: [
          '明日は雨が降ると思います。',
          '明日は雨が降ると言いました。',
          '明日は雨が降るそうです。',
          '明日は雨が降るかもしれません。'
        ],
        correctIndex: 0,
        explanation: 'Thể thông thường + と思います = Tôi nghĩ rằng...',
        wordId: 'w5_21_1'
      },
      {
        id: 'q5_2',
        question: 'Ai đó làm giúp tôi: "Chị Sato đã giúp tôi dọn phòng":',
        type: 'sentence-fill',
        options: [
          '佐藤さんが部屋を掃除してくれました。',
          '佐藤さんに部屋を掃除してあげました。',
          '佐藤さんが部屋を掃除してもらいました。',
          '佐藤さんは部屋を掃除しました。'
        ],
        correctIndex: 0,
        explanation: 'Người khác が 私に V-てくれます = Ai đó làm việc gì cho tôi.',
        wordId: 'w5_24_1'
      },
      {
        id: 'q5_3',
        question: 'Câu điều kiện: "Nếu có tiền, tôi sẽ đi du lịch Nhật Bản":',
        type: 'sentence-fill',
        options: [
          'お金があったら、日本へ旅行します。',
          'お金があっても、日本へ旅行しません。',
          'お金があるから、日本へ旅行しました。',
          'お金があるなら、日本へ旅行してはいけません。'
        ],
        correctIndex: 0,
        explanation: 'V-たら = Nếu... thì... (điều kiện giả định).',
        wordId: 'w5_25_3'
      },
      {
        id: 'q5_4',
        question: 'Định ngữ bổ nghĩa cho danh từ: "Chiếc bánh mà mẹ tôi đã làm":',
        type: 'sentence-fill',
        options: [
          '母が作ったケーキ',
          '母が作りますケーキ',
          '母が作ってケーキ',
          '母のケーキを作る'
        ],
        correctIndex: 0,
        explanation: 'Mệnh đề bổ nghĩa cho danh từ dùng động từ ở thể thông thường (作ったケーキ).',
        wordId: 'w5_22_1'
      },
      {
        id: 'q5_5',
        question: 'Khi rẽ phải ở cột đèn giao thông:「信号を右へ _____」:',
        type: 'sentence-fill',
        options: ['曲がります (magarimasu)', '渡ります (watarimasu)', '引きます (hikimasu)', '回します (mawashimasu)'],
        correctIndex: 0,
        explanation: '曲がる (まがる) = Rẽ, quẹo.',
        wordId: 'w5_23_5'
      },
      {
        id: 'q5_6',
        question: 'Từ「役に立つ」(やくにたつ) có nghĩa là gì?',
        type: 'meaning-to-word',
        options: ['Có ích, hữu ích', 'Cố gắng hết sức', 'Đến nơi', 'Suy nghĩ kỹ'],
        correctIndex: 0,
        explanation: '役に立つ = Hữu ích, có tác dụng.',
        wordId: 'w5_21_5'
      }
    ]
  },

  // --- STAGE 6: BÀI 26 - 30 (KHỞI ĐẦU N4) ---
  {
    id: 'exam_stage_6',
    stageId: 6,
    level: 'N4',
    title: 'Boss Exam 6: Khởi Đầu N4 (Bài 26 - 30)',
    subtitle: 'Nhấn mạnh lý do ～んです, thể khả năng 可能形, tự động từ vs tha động từ',
    lessonRange: [26, 30],
    timeLimitSeconds: 300,
    minPassScore: 80,
    questions: [
      {
        id: 'q6_1',
        question: 'Giải thích lý do xin phép về sớm: "Vì tôi đau đầu nên...":',
        type: 'sentence-fill',
        options: [
          '頭が痛いんです。',
          '頭が痛いですから。',
          '頭が痛いでした。',
          '頭が痛いようです。'
        ],
        correctIndex: 0,
        explanation: 'Thể thông thường + んです dùng để giải thích nguyên nhân, bối cảnh.',
        wordId: 'w4_26_1'
      },
      {
        id: 'q6_2',
        question: 'Chia động từ「飲みます」sang thể Khả năng (Có thể uống):',
        type: 'word-to-meaning',
        options: ['飲める (nomeru)', '飲まれる (nomareru)', '飲ませる (nomaseru)', '飲みられる (nomirareru)'],
        correctIndex: 0,
        explanation: 'Động từ nhóm 1: đổi cột い sang cột え (飲む -> 飲める).',
        wordId: 'w4_27_1'
      },
      {
        id: 'q6_3',
        question: 'Trợ từ đi kèm đối tượng của động từ thể khả năng thường chuyển thành:',
        type: 'sentence-fill',
        options: ['が (ga)', 'を (wo)', 'で (de)', 'に (ni)'],
        correctIndex: 0,
        explanation: 'Trong câu khả năng, trợ từ を thường chuyển thành が (日本語が話せる).',
        wordId: 'w4_27_2'
      },
      {
        id: 'q6_4',
        question: 'Trạng thái tự động từ: "Cửa sổ đang mở":',
        type: 'sentence-fill',
        options: [
          '窓が開いています。',
          '窓を開けています。',
          '窓を開けます。',
          '窓が開きます。'
        ],
        correctIndex: 0,
        explanation: 'Tự động từ 開く (あく) + いています biểu thị trạng thái kết quả của sự vật.',
        wordId: 'w4_29_1'
      },
      {
        id: 'q6_5',
        question: 'Chuẩn bị trước cho chuyến đi du lịch: "Tôi đã mua vé trước":',
        type: 'sentence-fill',
        options: [
          '切符を買っておきました。',
          '切符を買ってあります。',
          '切符を買ってしまいました。',
          '切符を買ってみました。'
        ],
        correctIndex: 0,
        explanation: 'V-ておきます = Chuẩn bị trước cho việc gì.',
        wordId: 'w4_30_1'
      }
    ]
  },

  // --- STAGE 10: BÀI 46 - 50 (TRÙM CUỐI TỐT NGHIỆP N4) ---
  {
    id: 'exam_stage_10',
    stageId: 10,
    level: 'N4',
    title: 'Boss Exam 10: ĐẠI CHIẾN CỘT MỐC TỐT NGHIỆP JLPT N4',
    subtitle: 'Tổng kết toàn diện N4: Thể Sai khiến, Tôn kính ngữ (尊敬語), Khiêm nhường ngữ (謙譲語)',
    lessonRange: [46, 50],
    timeLimitSeconds: 360,
    minPassScore: 80,
    questions: [
      {
        id: 'q10_1',
        question: 'Động từ tôn kính ngữ đặc biệt của「行きます / 来ます / います」là:',
        type: 'word-to-meaning',
        options: ['いらっしゃいます', 'まいります', 'めしあがります', 'おっしゃいます'],
        correctIndex: 0,
        explanation: 'いらっしゃる là tôn kính ngữ của 行く, 来る, いる.',
        wordId: 'w4_49_1'
      },
      {
        id: 'q10_2',
        question: 'Động từ khiêm nhường ngữ đặc biệt của「言います」(Nói) là:',
        type: 'word-to-meaning',
        options: ['申します (もうします)', 'おっしゃいます', 'いたします', '存じます'],
        correctIndex: 0,
        explanation: '申す (もうす) là khiêm nhường ngữ của 言う (Tôi tên là... = ...と申します).',
        wordId: 'w4_50_2'
      },
      {
        id: 'q10_3',
        question: 'Mẫu câu xin phép lịch sự: "Xin phép cho tôi được làm bài thuyết trình":',
        type: 'sentence-fill',
        options: [
          '発表させていただけませんか。',
          '発表してくださいませんか。',
          '発表してあげましょうか。',
          '発表しなければなりませんか。'
        ],
        correctIndex: 0,
        explanation: 'V-させて いただけませんか = Xin cho phép tôi làm gì (thể sai khiến + khiêm nhường).',
        wordId: 'w4_48_1'
      },
      {
        id: 'q10_4',
        question: 'Diễn đạt vừa mới làm xong theo cảm giác của người nói: "Tôi vừa mới đến Nhật":',
        type: 'sentence-fill',
        options: [
          '日本に来たばかりです。',
          '日本に来るところです。',
          '日本に来ているところです。',
          '日本に来ればいいです。'
        ],
        correctIndex: 0,
        explanation: 'V-た + ばかりです = Vừa mới làm xong (theo cảm nhận thời gian của người nói).',
        wordId: 'w4_46_1'
      }
    ]
  },

  // --- STAGE 11: BÀI 51 - 55 (KHỞI ĐỘNG N2) ---
  {
    id: 'exam_stage_11',
    stageId: 11,
    level: 'N2',
    title: 'Boss Exam 11: Cột Mốc Trung Cấp N2 (Bài 51 - 55)',
    subtitle: 'Ngữ pháp わけだ, にもかかわらず, たとたんに, ざるを得ない, を中心として',
    lessonRange: [51, 55],
    timeLimitSeconds: 360,
    minPassScore: 80,
    questions: [
      {
        id: 'q11_1',
        question: 'Chọn cấu trúc diễn tả điều đương nhiên: "Anh ấy đã sống ở Nhật 10 năm, hèn chi tiếng Nhật giỏi thế":',
        type: 'sentence-fill',
        options: [
          '彼は日本に10年も住んでいるのだから、日本語が上手なわけだ。',
          '彼は日本に10年も住んでいるのだから、日本語が上手なわけがない。',
          '彼は日本に10年も住んでいるのだから、日本語が上手なわけにはいかない。',
          '彼は日本に10年も住んでいるのだから、日本語が上手などころではない。'
        ],
        correctIndex: 0,
        explanation: '～わけだ dùng để giải thích kết quả đương nhiên (hèn chi, thảo nào).',
        wordId: 'w2_51_1'
      },
      {
        id: 'q11_2',
        question: 'Cấu trúc mang nghĩa nhượng bộ bất chấp: "Mặc dù trời mưa to nhưng trận đấu vẫn tiếp tục":',
        type: 'sentence-fill',
        options: [
          '大雨にもかかわらず、試合は続けられた。',
          '大雨ものの、試合は続けられた。',
          '大雨にしては、試合は続けられた。',
          '大雨わりに、試合は続けられた。'
        ],
        correctIndex: 0,
        explanation: 'N + にもかかわらず = Bất chấp N, dẫu cho N.',
        wordId: 'w2_52_1'
      },
      {
        id: 'q11_3',
        question: 'Từ「把握」(はあく) có âm Hán Việt và nghĩa là gì?',
        type: 'han-viet',
        options: [
          'BẢ ÁC - Nắm bắt rõ, thấu hiểu',
          'KHẮC PHỤC - Vượt qua',
          'DUY TRÌ - Giữ gìn',
          'MÂU THUẪN - Trái ngược'
        ],
        correctIndex: 0,
        explanation: '把握 (はあく) = BẢ ÁC = Nắm bắt tường tận hiện trạng.',
        wordId: 'w2_51_1'
      },
      {
        id: 'q11_4',
        question: 'Diễn tả tình huống không còn cách nào khác đành phải làm: "Đành phải hủy bỏ kế hoạch":',
        type: 'sentence-fill',
        options: [
          '計画を中止せざるを得ない。',
          '計画を中止してたまらない。',
          '計画を中止しかねない。',
          '計画を中止するわけがない。'
        ],
        correctIndex: 0,
        explanation: 'V (thể ない bỏ ない) + ざるを得ない = Buộc lòng phải, đành phải làm.',
        wordId: 'w2_54_1'
      },
      {
        id: 'q11_5',
        question: 'Từ「契機」(けいき) mang ý nghĩa gì?',
        type: 'meaning-to-word',
        options: ['Bước ngoặt, thời cơ chuyển biến', 'Thiệt hại', 'Bị thuyết phục', 'Xu hướng'],
        correctIndex: 0,
        explanation: '契機 (けいき) = KHẾ CƠ = Thời cơ, cơ duyên làm thay đổi cục diện.',
        wordId: 'w2_51_5'
      }
    ]
  },

  // --- STAGE 12: BÀI 56 - 60 (ĐẠI CHIẾN TỐT NGHIỆP N2) ---
  {
    id: 'exam_stage_12',
    stageId: 12,
    level: 'N2',
    title: 'Boss Exam 12: ĐẠI CHIẾN TỐT NGHIỆP JLPT N2 (Bài 56 - 60)',
    subtitle: 'Tổng hợp Thượng cấp N2: Thái độ に対して, Dựa trên に基づいて, Xu hướng 一方だ, Giới hạn に限って',
    lessonRange: [56, 60],
    timeLimitSeconds: 400,
    minPassScore: 80,
    questions: [
      {
        id: 'q12_1',
        question: 'Căn cứ thực tế: "Quyết định đưa ra dựa trên các số liệu điều tra":',
        type: 'sentence-fill',
        options: [
          '調査データに基づいて決定を下す。',
          '調査データに対して決定を下す。',
          '調査データをめぐって決定を下す。',
          '調査データに関して決定を下す。'
        ],
        correctIndex: 0,
        explanation: 'N + に基づいて (にもとづいて) = Dựa trên căn cứ, số liệu, pháp luật.',
        wordId: 'w2_56_1'
      },
      {
        id: 'q12_2',
        question: 'Khuynh hướng liên tục xấu đi: "Tình hình kinh tế ngày càng xấu đi":',
        type: 'sentence-fill',
        options: [
          '景気は悪化する一方だ。',
          '景気は悪化するばかりか。',
          '景気は悪化するのみならず。',
          '景気は悪化するにすぎない。'
        ],
        correctIndex: 0,
        explanation: 'V-る + 一方だ (いっぽうだ) = Ngày càng theo một chiều hướng (thường là tiêu cực).',
        wordId: 'w2_58_1'
      },
      {
        id: 'q12_3',
        question: 'Từ「慎重」(しんちょう) có âm Hán Việt là gì?',
        type: 'han-viet',
        options: ['THẬN TRỌNG (Cẩn trọng)', 'CẢNH GIỚI (Đề phòng)', 'CHUYÊN NIỆM (Chuyên tâm)', 'THỎA HIỆP (Nhân nhượng)'],
        correctIndex: 0,
        explanation: '慎重 (しんちょう) = THẬN TRỌNG.',
        wordId: 'w2_53_5'
      },
      {
        id: 'q12_4',
        question: 'Cấu trúc chỉ điều kiện duy nhất: "Chỉ cần có sức khỏe là có thể vượt qua tất cả":',
        type: 'sentence-fill',
        options: [
          '健康さえあれば、何でも乗り越えられる。',
          '健康に限って、何でも乗り越えられる。',
          '健康こそ、何でも乗り越えられる。',
          '健康に限り、何でも乗り越えられる。'
        ],
        correctIndex: 0,
        explanation: 'N さえ V-ば = Chỉ cần có điều kiện N là đủ.',
        wordId: 'w2_59_1'
      }
    ]
  }
];
