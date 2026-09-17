import { Lesson, JapaneseWord } from '../types';

export const JLPT_N2_LESSONS: Lesson[] = [
  {
    id: 51,
    level: 'N2',
    title: 'Bài 51: Lý do, Đương nhiên & Phủ định hoàn toàn',
    description: 'Ngữ pháp: ～わけだ (Đương nhiên là), ～わけがない (Tuyệt đối không), ～わけにはいかない (Không thể làm vì đạo đức), ～どころか (Nói gì đến/Trái lại)',
    stageId: 11,
    grammarPoints: ['Thể thông thường + わけだ (Hèn chi, thảo nào)', 'Thể thông thường + わけがない (Làm sao mà... được)', 'V-る / V-ない + わけにはいかない (Không thể làm vì lương tâm/nguyên tắc)', 'N / V-る + どころか (Nói chi đến... thậm chí còn...)']
  },
  {
    id: 52,
    level: 'N2',
    title: 'Bài 52: Nhượng bộ, Bất chấp & So với mức độ',
    description: 'Ngữ pháp: ～にもかかわらず (Mặc dù vậy), ～ものの (Dẫu biết nhưng), ～わりに(は) (So với thì lại khác), ～にしては (Ấy thế mà)',
    stageId: 11,
    grammarPoints: ['N / Thể thông thường + にもかかわらず (Mặc dù)', 'Thể thông thường + ものの (Dù là thế nhưng)', 'N の / Thể thông thường + わりに (So với tỷ lệ thông thường thì...)', 'N / Thể thông thường + にしては (Thế mà - ngạc nhiên)']
  },
  {
    id: 53,
    level: 'N2',
    title: 'Bài 53: Thời điểm tức thì & Trình tự hành động',
    description: 'Ngữ pháp: ～たとたん(に) (Ngay sau khi), ～次第 (Ngay sau khi xong thì), ～うちに (Trong lúc còn), ～か～ないかのうちに',
    stageId: 11,
    grammarPoints: ['V-た + とたんに (Vừa mới... thì ngay lập tức)', 'V (bỏ ます) + 次第 (Ngay sau khi làm xong sẽ...)', 'V-る / V-ない / N の + うちに (Tranh thủ lúc còn...)', 'V-る + か V-ないかのうちに (Vừa mới chớm xong thì...)']
  },
  {
    id: 54,
    level: 'N2',
    title: 'Bài 54: Tâm trạng cực độ, Bắt buộc & Nguy cơ',
    description: 'Ngữ pháp: ～てたまらない (Rất, không chịu nổi), ～てしょうがない, ～ざるを得ない (Đành phải), ～かねない (Có nguy cơ)',
    stageId: 11,
    grammarPoints: ['Adj-て / V-て + たまらない (Không thể kìm nén được cảm xúc)', 'V (thể ない bỏ ない) + ざるを得ない (Đành phải làm vì không còn cách khác)', 'V (bỏ ます) + かねない (Có nguy cơ dẫn đến kết quả xấu)', 'V (bỏ ます) + かねる (Khó lòng có thể làm được)']
  },
  {
    id: 55,
    level: 'N2',
    title: 'Bài 55: Tiêu chuẩn, Trọng tâm & Đại diện',
    description: 'Ngữ pháp: ～を中心として (Lấy làm trung tâm), ～を通じて (Thông qua), ～をはじめ (Đầu tiên phải kể đến), ～にかけて (Trải dài từ... đến...)',
    stageId: 11,
    grammarPoints: ['N + を中心として (Lấy N làm trung tâm)', 'N + を通じて / をとおして (Thông qua suốt thời gian/trung gian)', 'N + をはじめ (Trước hết là N, sau đó là...)', 'N1 から N2 にかけて (Khoảng từ N1 đến N2)']
  },
  {
    id: 56,
    level: 'N2',
    title: 'Bài 56: Thái độ, Căn cứ & Xoay quanh vấn đề',
    description: 'Ngữ pháp: ～に対して (Đối với), ～に関して (Liên quan đến), ～をめぐって (Tranh luận xoay quanh), ～に基づいて (Dựa trên căn cứ)',
    stageId: 12,
    grammarPoints: ['N + に対して (Hướng tới đối tượng / Ngược lại với)', 'N + に関して (Về vấn đề gì đó)', 'N + をめぐって (Xoay quanh ý kiến bất đồng)', 'N + に基づいて (Dựa trên số liệu, pháp luật, nguyên tắc)']
  },
  {
    id: 57,
    level: 'N2',
    title: 'Bài 57: Xu hướng, Khả năng & Cảm giác',
    description: 'Ngữ pháp: ～がち (Thường hay bị - tiêu cực), ～気味 (Hơi có cảm giác), ～っぽい (Đậm chất/Hay), ～得る/得ない (Có thể / Không thể)',
    stageId: 12,
    grammarPoints: ['V (bỏ ます) / N + がち (Thường có khuynh hướng xấu)', 'V (bỏ ます) / N + 気味 (ぎみ - Có triệu chứng hơi hơi...)', 'N / Adj + っぽい (Dễ nổi cáu, nhờn nhờn...)', 'V (bỏ ます) + 得る (える/うる - Có khả năng xảy ra)']
  },
  {
    id: 58,
    level: 'N2',
    title: 'Bài 58: Mức độ, Tiến triển & Không chỉ có thế',
    description: 'Ngữ pháp: ～一方だ (Càng ngày càng theo một chiều hướng), ～ばかりか (Không chỉ A mà còn B), ～のみならず, ～にすぎない (Chỉ là)',
    stageId: 12,
    grammarPoints: ['V-る + 一方だ (Có chiều hướng ngày càng...)', 'Thể thông thường + ばかりか (Không chỉ vậy mà còn nặng hơn)', 'N / Thể thông thường + のみならず (Không những... mà còn...)', 'N / Thể thông thường + にすぎない (Chẳng qua chỉ là...)']
  },
  {
    id: 59,
    level: 'N2',
    title: 'Bài 59: Giới hạn, Nhấn mạnh & Chỉ riêng',
    description: 'Ngữ pháp: ～に限って (Đúng vào lúc / Chỉ riêng), ～に限り (Chỉ dành cho đối tượng), ～さえ～ば (Chỉ cần có thì), ～こそ (Chính là vì)',
    stageId: 12,
    grammarPoints: ['N + に限って (Xui xẻo đúng lúc / Chỉ riêng người đó)', 'N + に限り (Chỉ giới hạn cho đối tượng đặc biệt)', 'N さえ V-ば (Chỉ cần có điều kiện này là đủ)', 'N + こそ (Chính là lúc này / Chính là đối tượng này)']
  },
  {
    id: 60,
    level: 'N2',
    title: 'Bài 60: ĐẠI CHIẾN CỘT MỐC TỔNG HỢP JLPT N2',
    description: 'Tổng hợp toàn diện ngữ pháp và từ vựng chuyên sâu N2 (Kính ngữ doanh nghiệp, đảo ngữ và văn phong nghị luận B2)',
    stageId: 12,
    grammarPoints: ['Văn phong nghị luận 論説文', 'Kính ngữ đàm phán thương mại ビジネス日本語', 'Tổng ôn luyện toàn diện N2 Mock']
  }
];

export const JLPT_N2_WORDS: JapaneseWord[] = [
  // --- BÀI 51 - 55 (Stage 11: N2 Khởi động & Nắm bắt nền tảng) ---
  {
    id: 'w2_51_1',
    lessonId: 51,
    level: 'N2',
    kanji: '把握',
    kana: 'はあく',
    hanViet: 'BẢ ÁC',
    meaning: 'Nắm bắt rõ, thấu hiểu tường tận',
    partOfSpeech: 'noun',
    exampleJp: '現状を正確に把握することが重要です。',
    exampleKana: 'げんじょうをせいかくにはあくすることがじゅうようです。',
    exampleVi: 'Việc nắm bắt chính xác hiện trạng là điều rất quan trọng.'
  },
  {
    id: 'w2_51_2',
    lessonId: 51,
    level: 'N2',
    kanji: '克服',
    kana: 'こくふく',
    hanViet: 'KHẮC PHỤC',
    meaning: 'Khắc phục, vượt qua (khó khăn, bệnh tật)',
    partOfSpeech: 'noun',
    exampleJp: '様々な困難を克服して成功しました。',
    exampleKana: 'さまざまのこんなんをこくふくしてせいこうしました。',
    exampleVi: 'Vượt qua nhiều khó khăn và đã gặt hái thành công.'
  },
  {
    id: 'w2_51_3',
    lessonId: 51,
    level: 'N2',
    kanji: '維持',
    kana: 'いじ',
    hanViet: 'DUY TRÌ',
    meaning: 'Duy trì, giữ gìn phong độ/trạng thái',
    partOfSpeech: 'noun',
    exampleJp: '健康を維持するために毎日運動します。',
    exampleKana: 'けんこうをいじするためにまいにちうんどうします。',
    exampleVi: 'Tập thể dục hàng ngày để duy trì sức khỏe.'
  },
  {
    id: 'w2_51_4',
    lessonId: 51,
    level: 'N2',
    kanji: '矛盾',
    kana: 'むじゅん',
    hanViet: 'MÂU THUẪN',
    meaning: 'Mâu thuẫn, trái ngược nhau',
    partOfSpeech: 'noun',
    exampleJp: '彼の言動には矛盾があります。',
    exampleKana: 'かれのげんどうにはむじゅんがあります。',
    exampleVi: 'Lời nói và hành động của anh ta có mâu thuẫn.'
  },
  {
    id: 'w2_51_5',
    lessonId: 51,
    level: 'N2',
    kanji: '契機',
    kana: 'けいき',
    hanViet: 'KHẾ CƠ',
    meaning: 'Cơ hội, bước ngoặt, thời cơ chuyển biến',
    partOfSpeech: 'noun',
    exampleJp: '留学を契機に日本語の勉強に専念しました。',
    exampleKana: 'りゅうがくをけいきににほんごのべんきょうにせんねんしました。',
    exampleVi: 'Lấy việc đi du học làm bước ngoặt, tôi đã chuyên tâm học tiếng Nhật.'
  },

  {
    id: 'w2_52_1',
    lessonId: 52,
    level: 'N2',
    kanji: '考慮',
    kana: 'こうりょ',
    hanViet: 'KHẢO LỰ',
    meaning: 'Cân nhắc, suy xét kỹ lưỡng',
    partOfSpeech: 'noun',
    exampleJp: '相手の立場を考慮して発言すべきです。',
    exampleKana: 'あいてのたちばをこうりょしてはつげんすべきです。',
    exampleVi: 'Nên cân nhắc lập trường của đối phương trước khi phát biểu.'
  },
  {
    id: 'w2_52_2',
    lessonId: 52,
    level: 'N2',
    kanji: '優先',
    kana: 'ゆうせん',
    hanViet: 'ƯU TIÊN',
    meaning: 'Ưu tiên hàng đầu',
    partOfSpeech: 'noun',
    exampleJp: '安全を最優先に考えて作業を進めます。',
    exampleKana: 'あんぜんをさいゆうせんにかんがえてさぎょうをすすめます。',
    exampleVi: 'Tiến hành công việc với sự ưu tiên an toàn lên hàng đầu.'
  },
  {
    id: 'w2_52_3',
    lessonId: 52,
    level: 'N2',
    kanji: '貢献',
    kana: 'こうけん',
    hanViet: 'CỐNG HIẾN',
    meaning: 'Cống hiến, đóng góp công lao',
    partOfSpeech: 'noun',
    exampleJp: '社会の発展に貢献したいです。',
    exampleKana: 'しゃかいのはってんにこうけんしたいです。',
    exampleVi: 'Tôi muốn cống hiến cho sự phát triển của xã hội.'
  },
  {
    id: 'w2_52_4',
    lessonId: 52,
    level: 'N2',
    kanji: '納得',
    kana: 'なっとく',
    hanViet: 'NẠP ĐẮC',
    meaning: 'Đồng ý, bị thuyết phục hoàn toàn',
    partOfSpeech: 'noun',
    exampleJp: '説明を聞いて納得しました。',
    exampleKana: 'せつめいをきいてなっとくしました。',
    exampleVi: 'Sau khi nghe giải thích thì tôi đã hoàn toàn bị thuyết phục.'
  },
  {
    id: 'w2_52_5',
    lessonId: 52,
    level: 'N2',
    kanji: '傾向',
    kana: 'けいこう',
    hanViet: 'KHUYNH HƯỚNG',
    meaning: 'Khuynh hướng, xu hướng chung',
    partOfSpeech: 'noun',
    exampleJp: '若者の読書離れの傾向が見られます。',
    exampleKana: 'わかもののどくしょばなれのけいこうがみられます。',
    exampleVi: 'Có thể thấy xu hướng giới trẻ ngày càng ít đọc sách.'
  },

  {
    id: 'w2_53_1',
    lessonId: 53,
    level: 'N2',
    kanji: '措置',
    kana: 'そち',
    hanViet: 'THỐ TRÍ',
    meaning: 'Biện pháp giải quyết, xử lý',
    partOfSpeech: 'noun',
    exampleJp: '緊急の安全措置を講じました。',
    exampleKana: 'きんきゅうのあんぜんそちをこうじました。',
    exampleVi: 'Đã áp dụng các biện pháp an toàn khẩn cấp.'
  },
  {
    id: 'w2_53_2',
    lessonId: 53,
    level: 'N2',
    kanji: '意図',
    kana: 'いと',
    hanViet: 'Ý ĐỒ',
    meaning: 'Ý đồ, mục đích dự định',
    partOfSpeech: 'noun',
    exampleJp: '発言の意図を正しく伝えます。',
    exampleKana: 'はつげんのいとをただしくつたえます。',
    exampleVi: 'Truyền đạt chính xác ý đồ của phát ngôn.'
  },
  {
    id: 'w2_53_3',
    lessonId: 53,
    level: 'N2',
    kanji: '専念',
    kana: 'せんねん',
    hanViet: 'CHUYÊN NIỆM',
    meaning: 'Chuyên tâm, dồn toàn lực',
    partOfSpeech: 'noun',
    exampleJp: '試験が終わるまで勉強に専念します。',
    exampleKana: 'しけんがおわるまでべんきょうにせんねんします。',
    exampleVi: 'Tôi chuyên tâm học hành cho tới khi kỳ thi kết thúc.'
  },
  {
    id: 'w2_53_4',
    lessonId: 53,
    level: 'N2',
    kanji: '警戒',
    kana: 'けいかい',
    hanViet: 'CẢNH GIỚI',
    meaning: 'Cảnh giác, đề phòng rủi ro',
    partOfSpeech: 'noun',
    exampleJp: '大雨による土砂崩れに警戒してください。',
    exampleKana: 'おおあめによるどしゃくずれにけいかいしてください。',
    exampleVi: 'Xin hãy cảnh giác với sạt lở đất do mưa lớn.'
  },
  {
    id: 'w2_53_5',
    lessonId: 53,
    level: 'N2',
    kanji: '慎重',
    kana: 'しんちょう',
    hanViet: 'THẬN TRỌNG',
    meaning: 'Thận trọng, cẩn trọng tuyệt đối',
    partOfSpeech: 'adj-na',
    exampleJp: '慎重に計画を立てる必要があります。',
    exampleKana: 'しんちょうにけいかくをたてるひつようがあります。',
    exampleVi: 'Cần phải lập kế hoạch một cách thận trọng.'
  },

  {
    id: 'w2_54_1',
    lessonId: 54,
    level: 'N2',
    kanji: '妥協',
    kana: 'だきょう',
    hanViet: 'THỎA HIỆP',
    meaning: 'Thỏa hiệp, nhân nhượng đôi bên',
    partOfSpeech: 'noun',
    exampleJp: 'お互いに妥協点を見出しました。',
    exampleKana: 'おたがいにだきょうてんをみいだしました。',
    exampleVi: 'Đôi bên đã tìm thấy điểm thỏa hiệp chung.'
  },
  {
    id: 'w2_54_2',
    lessonId: 54,
    level: 'N2',
    kanji: '躊躇',
    kana: 'ちゅうちょ',
    hanViet: 'TRÙ TRỪ',
    meaning: 'Do dự, ngập ngừng, lưỡng lự',
    partOfSpeech: 'noun',
    exampleJp: 'チャンスのときは躊躇してはいけません。',
    exampleKana: 'チャンスのときはちゅうちょしてはいけません。',
    exampleVi: 'Khi cơ hội đến thì không được do dự.'
  },
  {
    id: 'w2_54_3',
    lessonId: 54,
    level: 'N2',
    kanji: '妥当',
    kana: 'だとう',
    hanViet: 'THỎA ĐƯƠNG',
    meaning: 'Thỏa đáng, hợp lý đúng đắn',
    partOfSpeech: 'adj-na',
    exampleJp: 'この判断は妥当だと思います。',
    exampleKana: 'このはんだんはだとうだとおもいます。',
    exampleVi: 'Tôi nghĩ phán đoán này là thỏa đáng.'
  },
  {
    id: 'w2_54_4',
    lessonId: 54,
    level: 'N2',
    kanji: '痛感',
    kana: 'つうかん',
    hanViet: 'THỐNG CẢM',
    meaning: 'Cảm nhận sâu sắc, thấm thía',
    partOfSpeech: 'noun',
    exampleJp: '力不足を痛感しました。',
    exampleKana: 'ちからぶそくをつうかんしました。',
    exampleVi: 'Tôi cảm nhận sâu sắc sự thiếu hụt năng lực của bản thân.'
  },
  {
    id: 'w2_54_5',
    lessonId: 54,
    level: 'N2',
    kanji: '蓄積',
    kana: 'ちくせき',
    hanViet: 'SÚC TÍCH',
    meaning: 'Tích lũy kinh nghiệm/tri thức',
    partOfSpeech: 'noun',
    exampleJp: '長年の知識を蓄積してきました。',
    exampleKana: 'ながねんのちしきをちくせきしてきました。',
    exampleVi: 'Đã tích lũy tri thức qua nhiều năm tháng.'
  },

  // --- BÀI 55 - 60 (Stage 12: Thượng cấp N2 & Tốt nghiệp) ---
  {
    id: 'w2_56_1',
    lessonId: 56,
    level: 'N2',
    kanji: '撤回',
    kana: 'てっかい',
    hanViet: 'TRIỆT HỒI',
    meaning: 'Rút lại (lời nói, quyết định, đề xuất)',
    partOfSpeech: 'noun',
    exampleJp: '問題の発言を撤回しました。',
    exampleKana: 'もんだいのはつげんをてっかいしました。',
    exampleVi: 'Đã rút lại phát ngôn gây tranh cãi.'
  },
  {
    id: 'w2_56_2',
    lessonId: 56,
    level: 'N2',
    kanji: '繁栄',
    kana: 'はんえい',
    hanViet: 'PHỒN VINH',
    meaning: 'Phồn vinh, thịnh vượng kinh tế',
    partOfSpeech: 'noun',
    exampleJp: '国の繁栄を祈ります。',
    exampleKana: 'くにのはんえいをいのります。',
    exampleVi: 'Cầu chúc cho sự phồn vinh của đất nước.'
  },
  {
    id: 'w2_57_1',
    lessonId: 57,
    level: 'N2',
    kanji: '密接',
    kana: 'みっせつ',
    hanViet: 'MẬT TIẾP',
    meaning: 'Mật thiết, liên quan chặt chẽ',
    partOfSpeech: 'adj-na',
    exampleJp: '環境問題と経済は密接に関係しています。',
    exampleKana: 'かんきょうもんだいとけいざいはみっせつにかんけいしています。',
    exampleVi: 'Vấn đề môi trường và kinh tế có mối quan hệ mật thiết.'
  },
  {
    id: 'w2_58_1',
    lessonId: 58,
    level: 'N2',
    kanji: '模索',
    kana: 'もさく',
    hanViet: 'MÔ TÁC',
    meaning: 'Tìm kiếm phương hướng, mò mẫm cách làm',
    partOfSpeech: 'noun',
    exampleJp: '新しい解決策を模索しています。',
    exampleKana: 'あたらしいかいけつさくをもさくしています。',
    exampleVi: 'Đang mò mẫm tìm kiếm giải pháp mới.'
  },
  {
    id: 'w2_59_1',
    lessonId: 59,
    level: 'N2',
    kanji: '悠々',
    kana: 'ゆうゆう',
    hanViet: 'DU',
    meaning: 'Ung dung, thong dong, nhàn nhã',
    partOfSpeech: 'adverb',
    exampleJp: '悠々と空を飛ぶ鳥を眺めます。',
    exampleKana: 'ゆうゆうとそらをとぶとりをながめます。',
    exampleVi: 'Ngắm nhìn cánh chim thong dong bay lượn trên bầu trời.'
  },
  {
    id: 'w2_60_1',
    lessonId: 60,
    level: 'N2',
    kanji: '励行',
    kana: 'れいこう',
    hanViet: 'LỆ HÀNH',
    meaning: 'Nghiêm chỉnh thực hiện quy định/lời hứa',
    partOfSpeech: 'noun',
    exampleJp: '手洗いうがいの励行を呼びかけます。',
    exampleKana: 'てあらい・うがいのれいこうをよびかけます。',
    exampleVi: 'Kêu gọi mọi người nghiêm chỉnh thực hiện việc rửa tay và súc họng.'
  }
];
