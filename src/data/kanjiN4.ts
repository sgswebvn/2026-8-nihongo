import { KanjiItem } from '../types';

export const KANJI_N4_LIST: KanjiItem[] = [
  {
    id: 'k4_1',
    level: 'N4',
    character: '会',
    hanViet: 'HỘI',
    meaning: 'Gặp gỡ, hiệp hội',
    onyomi: ['カイ', 'エ'],
    kunyomi: ['あ.う'],
    strokes: 6,
    compounds: [
      { word: '会う', reading: 'あう', hanViet: 'HỘI', meaning: 'Gặp gỡ' },
      { word: '会社', reading: 'かいしゃ', hanViet: 'HỘI XÃ', meaning: 'Công ty' },
      { word: '会話', reading: 'かいわ', hanViet: 'HỘI THOẠI', meaning: 'Hội thoại' }
    ]
  },
  {
    id: 'k4_2',
    level: 'N4',
    character: '社',
    hanViet: 'XÃ',
    meaning: 'Công ty, xã hội, đền',
    onyomi: ['シャ'],
    kunyomi: ['やしろ'],
    strokes: 7,
    compounds: [
      { word: '社会', reading: 'しゃかい', hanViet: 'XÃ HỘI', meaning: 'Xã hội' },
      { word: '神社', reading: 'じんじゃ', hanViet: 'THẦN XÃ', meaning: 'Đền Thần đạo' },
      { word: '社員', reading: 'しゃいん', hanViet: 'XÃ VIÊN', meaning: 'Nhân viên công ty' }
    ]
  },
  {
    id: 'k4_3',
    level: 'N4',
    character: '電',
    hanViet: 'ĐIỆN',
    meaning: 'Điện lực, chớp',
    onyomi: ['デン'],
    kunyomi: [],
    strokes: 13,
    compounds: [
      { word: '電車', reading: 'でんしゃ', hanViet: 'ĐIỆN XA', meaning: 'Tàu điện' },
      { word: '電話', reading: 'でんわ', hanViet: 'ĐIỆN THOẠI', meaning: 'Điện thoại' },
      { word: '電気', reading: 'でんき', hanViet: 'ĐIỆN KHÍ', meaning: 'Điện, đèn điện' }
    ]
  },
  {
    id: 'k4_4',
    level: 'N4',
    character: '車',
    hanViet: 'XA',
    meaning: 'Xe cộ, bánh xe',
    onyomi: ['シャ'],
    kunyomi: ['くるま'],
    strokes: 7,
    compounds: [
      { word: '車', reading: 'くるま', hanViet: 'XA', meaning: 'Xe hơi' },
      { word: '自転車', reading: 'じてんしゃ', hanViet: 'TỰ CHUYỂN XA', meaning: 'Xe đạp' },
      { word: '自動車', reading: 'じどうしゃ', hanViet: 'TỰ ĐỘNG XA', meaning: 'Xe ô tô' }
    ]
  },
  {
    id: 'k4_5',
    level: 'N4',
    character: '食',
    hanViet: 'THỰC',
    meaning: 'Ăn, món ăn',
    onyomi: ['ショク', 'ジキ'],
    kunyomi: ['た.べる', 'く.う'],
    strokes: 9,
    compounds: [
      { word: '食べる', reading: 'たべる', hanViet: 'THỰC', meaning: 'Ăn' },
      { word: '食事', reading: 'しょくじ', hanViet: 'THỰC SỰ', meaning: 'Bữa ăn' },
      { word: '朝食', reading: 'ちょうしょく', hanViet: 'TRIÊU THỰC', meaning: 'Bữa sáng' }
    ]
  },
  {
    id: 'k4_6',
    level: 'N4',
    character: '飲',
    hanViet: 'ẨM',
    meaning: 'Uống',
    onyomi: ['イン'],
    kunyomi: ['の.む'],
    strokes: 12,
    compounds: [
      { word: '飲む', reading: 'のむ', hanViet: 'ẨM', meaning: 'Uống' },
      { word: '飲み物', reading: 'のみもの', hanViet: 'ẨM VẬT', meaning: 'Đồ uống' },
      { word: '飲食店', reading: 'いんしょくてん', hanViet: 'ẨM THỰC ĐIẾM', meaning: 'Nhà hàng ăn uống' }
    ]
  },
  {
    id: 'k4_7',
    level: 'N4',
    character: '聞',
    hanViet: 'VĂN',
    meaning: 'Nghe, hỏi',
    onyomi: ['ブン', 'モン'],
    kunyomi: ['き.く', 'き.こえる'],
    strokes: 14,
    compounds: [
      { word: '聞く', reading: 'きく', hanViet: 'VĂN', meaning: 'Nghe, hỏi' },
      { word: '新聞', reading: 'しんぶん', hanViet: 'TÂN VĂN', meaning: 'Tờ báo' },
      { word: '聞こえる', reading: 'きこえる', hanViet: 'VĂN', meaning: 'Nghe thấy' }
    ]
  },
  {
    id: 'k4_8',
    level: 'N4',
    character: '読',
    hanViet: 'ĐỘC',
    meaning: 'Đọc sách',
    onyomi: ['ドク', 'トク'],
    kunyomi: ['よ.む'],
    strokes: 14,
    compounds: [
      { word: '読む', reading: 'よむ', hanViet: 'ĐỘC', meaning: 'Đọc' },
      { word: '読書', reading: 'どくしょ', hanViet: 'ĐỘC THƯ', meaning: 'Đọc sách' }
    ]
  },
  {
    id: 'k4_9',
    level: 'N4',
    character: '書',
    hanViet: 'THƯ',
    meaning: 'Viết, thư từ, sách',
    onyomi: ['ショ'],
    kunyomi: ['か.く'],
    strokes: 10,
    compounds: [
      { word: '書く', reading: 'かく', hanViet: 'THƯ', meaning: 'Viết' },
      { word: '図書館', reading: 'としょかん', hanViet: 'ĐỒ THƯ QUÁN', meaning: 'Thư viện' },
      { word: '教科書', reading: 'きょうかしょ', hanViet: 'GIÁO KHOA THƯ', meaning: 'Sách giáo khoa' }
    ]
  },
  {
    id: 'k4_10',
    level: 'N4',
    character: '言',
    hanViet: 'NGÔN',
    meaning: 'Nói, lời nói',
    onyomi: ['ゲン', 'ゴン'],
    kunyomi: ['い.う', 'こと'],
    strokes: 7,
    compounds: [
      { word: '言う', reading: 'いう', hanViet: 'NGÔN', meaning: 'Nói' },
      { word: '言葉', reading: 'ことば', hanViet: 'NGÔN DIỆP', meaning: 'Từ vựng, lời nói' },
      { word: '方言', reading: 'ほうげん', hanViet: 'PHƯƠNG NGÔN', meaning: 'Tiếng địa phương' }
    ]
  },
  {
    id: 'k4_11',
    level: 'N4',
    character: '話',
    hanViet: 'THOẠI',
    meaning: 'Nói chuyện, câu chuyện',
    onyomi: ['ワ'],
    kunyomi: ['はな.す', 'はなし'],
    strokes: 13,
    compounds: [
      { word: '話す', reading: 'はなす', hanViet: 'THOẠI', meaning: 'Nói chuyện' },
      { word: '話', reading: 'はなし', hanViet: 'THOẠI', meaning: 'Câu chuyện' },
      { word: '電話', reading: 'でんわ', hanViet: 'ĐIỆN THOẠI', meaning: 'Điện thoại' }
    ]
  },
  {
    id: 'k4_12',
    level: 'N4',
    character: '買',
    hanViet: 'MÃI',
    meaning: 'Mua',
    onyomi: ['バイ'],
    kunyomi: ['か.う'],
    strokes: 12,
    compounds: [
      { word: '買う', reading: 'かう', hanViet: 'MÃI', meaning: 'Mua sắm' },
      { word: '買い物', reading: 'かいもの', hanViet: 'MÃI VẬT', meaning: 'Mua sắm đồ' }
    ]
  },
  {
    id: 'k4_13',
    level: 'N4',
    character: '友',
    hanViet: 'HỮU',
    meaning: 'Bạn bè',
    onyomi: ['ユウ'],
    kunyomi: ['とも'],
    strokes: 4,
    compounds: [
      { word: '友達', reading: 'ともだち', hanViet: 'HỮU ĐẠT', meaning: 'Bạn bè' },
      { word: '親友', reading: 'しんゆう', hanViet: 'THÂN HỮU', meaning: 'Bạn thân' },
      { word: '友情', reading: 'ゆうじょう', hanViet: 'HỮU TÌNH', meaning: 'Tình bạn' }
    ]
  },
  {
    id: 'k4_14',
    level: 'N4',
    character: '間',
    hanViet: 'GIAN',
    meaning: 'Khoảng giữa, thời gian',
    onyomi: ['カン', 'ケン'],
    kunyomi: ['あいだ', 'ま'],
    strokes: 12,
    compounds: [
      { word: '時間', reading: 'じかん', hanViet: 'THỜI GIAN', meaning: 'Thời gian' },
      { word: '間', reading: 'あいだ', hanViet: 'GIAN', meaning: 'Ở giữa' },
      { word: '人間', reading: 'にんげん', hanViet: 'NHÂN GIAN', meaning: 'Con người' }
    ]
  },
  {
    id: 'k4_15',
    level: 'N4',
    character: '駅',
    hanViet: 'DỊCH',
    meaning: 'Nhà ga',
    onyomi: ['エキ'],
    kunyomi: [],
    strokes: 14,
    compounds: [
      { word: '駅', reading: 'えき', hanViet: 'DỊCH', meaning: 'Nhà ga' },
      { word: '駅長', reading: 'えきちょう', hanViet: 'DỊCH TRƯỞNG', meaning: 'Trưởng ga' },
      { word: '駅前', reading: 'えきまえ', hanViet: 'DỊCH TIỀN', meaning: 'Trước nhà ga' }
    ]
  }
];
