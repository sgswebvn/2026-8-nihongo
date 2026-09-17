import { KanjiItem } from '../types';

export const KANJI_N5_LIST: KanjiItem[] = [
  {
    id: 'k5_1',
    level: 'N5',
    character: '一',
    hanViet: 'NHẤT',
    meaning: 'Số một, một',
    onyomi: ['イチ', 'イツ'],
    kunyomi: ['ひと', 'ひと.つ'],
    strokes: 1,
    compounds: [
      { word: '一つ', reading: 'ひとつ', hanViet: 'NHẤT', meaning: 'Một cái' },
      { word: '一人', reading: 'ひとり', hanViet: 'NHẤT NHÂN', meaning: 'Một người, một mình' },
      { word: '一日', reading: 'ついたち / いちにち', hanViet: 'NHẤT NHẬT', meaning: 'Ngày mùng một / Một ngày' },
      { word: '一番', reading: 'いちばん', hanViet: 'NHẤT PHIÊN', meaning: 'Số một, nhất' }
    ]
  },
  {
    id: 'k5_2',
    level: 'N5',
    character: '二',
    hanViet: 'NHỊ',
    meaning: 'Số hai',
    onyomi: ['ニ'],
    kunyomi: ['ふた', 'ふた.つ'],
    strokes: 2,
    compounds: [
      { word: '二つ', reading: 'ふたつ', hanViet: 'NHỊ', meaning: 'Hai cái' },
      { word: '二人', reading: 'ふたり', hanViet: 'NHỊ NHÂN', meaning: 'Hai người' },
      { word: '二日', reading: 'ふつか', hanViet: 'NHỊ NHẬT', meaning: 'Ngày mùng 2 / Hai ngày' },
      { word: '二月', reading: 'にがつ', hanViet: 'NHỊ NGUYỆT', meaning: 'Tháng 2' }
    ]
  },
  {
    id: 'k5_3',
    level: 'N5',
    character: '三',
    hanViet: 'TAM',
    meaning: 'Số ba',
    onyomi: ['サン'],
    kunyomi: ['み', 'みっ.つ'],
    strokes: 3,
    compounds: [
      { word: '三つ', reading: 'みっつ', hanViet: 'TAM', meaning: 'Ba cái' },
      { word: '三人', reading: 'さんにん', hanViet: 'TAM NHÂN', meaning: 'Ba người' },
      { word: '三日', reading: 'みっか', hanViet: 'TAM NHẬT', meaning: 'Ngày mùng 3 / Ba ngày' },
      { word: '三角', reading: 'さんかく', hanViet: 'TAM GIÁC', meaning: 'Hình tam giác' }
    ]
  },
  {
    id: 'k5_4',
    level: 'N5',
    character: '四',
    hanViet: 'TỨ',
    meaning: 'Số bốn',
    onyomi: ['シ'],
    kunyomi: ['よ', 'よ.つ', 'よっ.つ', 'よん'],
    strokes: 4,
    compounds: [
      { word: '四つ', reading: 'よっつ', hanViet: 'TỨ', meaning: 'Bốn cái' },
      { word: '四月', reading: 'しがつ', hanViet: 'TỨ NGUYỆT', meaning: 'Tháng 4' },
      { word: '四日', reading: 'よっか', hanViet: 'TỨ NHẬT', meaning: 'Ngày mùng 4 / Bốn ngày' },
      { word: '四季', reading: 'しき', hanViet: 'TỨ QUÝ', meaning: 'Bốn mùa' }
    ]
  },
  {
    id: 'k5_5',
    level: 'N5',
    character: '五',
    hanViet: 'NGŨ',
    meaning: 'Số năm',
    onyomi: ['ゴ'],
    kunyomi: ['いつ', 'いつ.つ'],
    strokes: 4,
    compounds: [
      { word: '五つ', reading: 'いつつ', hanViet: 'NGŨ', meaning: 'Năm cái' },
      { word: '五月', reading: 'ごがつ', hanViet: 'NGŨ NGUYỆT', meaning: 'Tháng 5' },
      { word: '五日', reading: 'いつか', hanViet: 'NGŨ NHẬT', meaning: 'Ngày mùng 5 / Năm ngày' }
    ]
  },
  {
    id: 'k5_6',
    level: 'N5',
    character: '六',
    hanViet: 'LỤC',
    meaning: 'Số sáu',
    onyomi: ['ロク'],
    kunyomi: ['む', 'むっ.つ', 'むい'],
    strokes: 4,
    compounds: [
      { word: '六つ', reading: 'むっつ', hanViet: 'LỤC', meaning: 'Sáu cái' },
      { word: '六日', reading: 'むいか', hanViet: 'LỤC NHẬT', meaning: 'Ngày mùng 6 / Sáu ngày' },
      { word: '六月', reading: 'ろくがつ', hanViet: 'LỤC NGUYỆT', meaning: 'Tháng 6' }
    ]
  },
  {
    id: 'k5_7',
    level: 'N5',
    character: '七',
    hanViet: 'THẤT',
    meaning: 'Số bảy',
    onyomi: ['シチ'],
    kunyomi: ['なな', 'なな.つ', 'なの'],
    strokes: 2,
    compounds: [
      { word: '七つ', reading: 'ななつ', hanViet: 'THẤT', meaning: 'Bảy cái' },
      { word: '七日', reading: 'なのか', hanViet: 'THẤT NHẬT', meaning: 'Ngày mùng 7 / Bảy ngày' },
      { word: '七月', reading: 'しちがつ', hanViet: 'THẤT NGUYỆT', meaning: 'Tháng 7' }
    ]
  },
  {
    id: 'k5_8',
    level: 'N5',
    character: '八',
    hanViet: 'BÁT',
    meaning: 'Số tám',
    onyomi: ['ハチ'],
    kunyomi: ['や', 'やっ.つ', 'よう'],
    strokes: 2,
    compounds: [
      { word: '八つ', reading: 'やっつ', hanViet: 'BÁT', meaning: 'Tám cái' },
      { word: '八日', reading: 'ようか', hanViet: 'BÁT NHẬT', meaning: 'Ngày mùng 8 / Tám ngày' },
      { word: '八百屋', reading: 'やおや', hanViet: 'BÁT BÁCH ỐC', meaning: 'Cửa hàng rau củ' }
    ]
  },
  {
    id: 'k5_9',
    level: 'N5',
    character: '九',
    hanViet: 'CỬU',
    meaning: 'Số chín',
    onyomi: ['キュウ', 'ク'],
    kunyomi: ['ここの', 'ここの.つ'],
    strokes: 2,
    compounds: [
      { word: '九つ', reading: 'ここのつ', hanViet: 'CỬU', meaning: 'Chín cái' },
      { word: '九日', reading: 'ここのか', hanViet: 'CỬU NHẬT', meaning: 'Ngày mùng 9 / Chín ngày' },
      { word: '九月', reading: 'くがつ', hanViet: 'CỬU NGUYỆT', meaning: 'Tháng 9' }
    ]
  },
  {
    id: 'k5_10',
    level: 'N5',
    character: '十',
    hanViet: 'THẬP',
    meaning: 'Số mười',
    onyomi: ['ジュウ', 'ジッ'],
    kunyomi: ['とお', 'と'],
    strokes: 2,
    compounds: [
      { word: '十', reading: 'とお', hanViet: 'THẬP', meaning: 'Mười cái' },
      { word: '十日', reading: 'とおか', hanViet: 'THẬP NHẬT', meaning: 'Ngày mùng 10 / Mười ngày' },
      { word: '十月', reading: 'じゅうがつ', hanViet: 'THẬP NGUYỆT', meaning: 'Tháng 10' }
    ]
  },
  {
    id: 'k5_11',
    level: 'N5',
    character: '百',
    hanViet: 'BÁCH',
    meaning: 'Một trăm',
    onyomi: ['ヒャク'],
    kunyomi: ['もも'],
    strokes: 6,
    compounds: [
      { word: '百', reading: 'ひゃく', hanViet: 'BÁCH', meaning: 'Một trăm' },
      { word: '三百', reading: 'さんびゃく', hanViet: 'TAM BÁCH', meaning: 'Ba trăm' },
      { word: '六百', reading: 'ろっぴゃく', hanViet: 'LỤC BÁCH', meaning: 'Sáu trăm' }
    ]
  },
  {
    id: 'k5_12',
    level: 'N5',
    character: '千',
    hanViet: 'THIÊN',
    meaning: 'Một nghìn',
    onyomi: ['セン'],
    kunyomi: ['ち'],
    strokes: 3,
    compounds: [
      { word: '千', reading: 'せん', hanViet: 'THIÊN', meaning: 'Một nghìn' },
      { word: '三千', reading: 'さんぜん', hanViet: 'TAM THIÊN', meaning: 'Ba nghìn' },
      { word: '千円', reading: 'せんえん', hanViet: 'THIÊN YÊN', meaning: 'Một nghìn yên' }
    ]
  },
  {
    id: 'k5_13',
    level: 'N5',
    character: '万',
    hanViet: 'VẠN',
    meaning: 'Mười nghìn, vạn',
    onyomi: ['マン', 'バン'],
    kunyomi: [],
    strokes: 3,
    compounds: [
      { word: '一万', reading: 'いちまん', hanViet: 'NHẤT VẠN', meaning: 'Mười nghìn (10.000)' },
      { word: '万国', reading: 'ばんこく', hanViet: 'VẠN QUỐC', meaning: 'Vạn quốc, toàn thế giới' }
    ]
  },
  {
    id: 'k5_14',
    level: 'N5',
    character: '日',
    hanViet: 'NHẬT',
    meaning: 'Ngày, mặt trời',
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', 'か'],
    strokes: 4,
    compounds: [
      { word: '日本', reading: 'にほん / にっぽん', hanViet: 'NHẬT BẢN', meaning: 'Nhật Bản' },
      { word: '日曜日', reading: 'にちようび', hanViet: 'NHẬT DIỆU NHẬT', meaning: 'Chủ nhật' },
      { word: '毎日', reading: 'まいにち', hanViet: 'MỖI NHẬT', meaning: 'Mỗi ngày' }
    ]
  },
  {
    id: 'k5_15',
    level: 'N5',
    character: '月',
    hanViet: 'NGUYỆT',
    meaning: 'Mặt trăng, tháng',
    onyomi: ['ゲツ', 'ガツ'],
    kunyomi: ['つき'],
    strokes: 4,
    compounds: [
      { word: '月曜日', reading: 'げつようび', hanViet: 'NGUYỆT DIỆU NHẬT', meaning: 'Thứ hai' },
      { word: '今月', reading: 'こんげつ', hanViet: 'KIM NGUYỆT', meaning: 'Tháng này' },
      { word: '毎月', reading: 'まいつき / まいげつ', hanViet: 'MỖI NGUYỆT', meaning: 'Mỗi tháng' }
    ]
  },
  {
    id: 'k5_16',
    level: 'N5',
    character: '火',
    hanViet: 'HỎA',
    meaning: 'Lửa',
    onyomi: ['カ'],
    kunyomi: ['ひ'],
    strokes: 4,
    compounds: [
      { word: '火曜日', reading: 'かようび', hanViet: 'HỎA DIỆU NHẬT', meaning: 'Thứ ba' },
      { word: '火事', reading: 'かじ', hanViet: 'HỎA SỰ', meaning: 'Hỏa hoạn' },
      { word: '花火', reading: 'はなび', hanViet: 'HOA HỎA', meaning: 'Pháo hoa' }
    ]
  },
  {
    id: 'k5_17',
    level: 'N5',
    character: '水',
    hanViet: 'THỦY',
    meaning: 'Nước',
    onyomi: ['スイ'],
    kunyomi: ['みず'],
    strokes: 4,
    compounds: [
      { word: '水曜日', reading: 'すいようび', hanViet: 'THỦY DIỆU NHẬT', meaning: 'Thứ tư' },
      { word: 'お水', reading: 'おみず', hanViet: 'THỦY', meaning: 'Nước uống' },
      { word: '水泳', reading: 'すいえい', hanViet: 'THỦY VỊNH', meaning: 'Bơi lội' }
    ]
  },
  {
    id: 'k5_18',
    level: 'N5',
    character: '木',
    hanViet: 'MỘC',
    meaning: 'Cây, gỗ',
    onyomi: ['モク', 'ボク'],
    kunyomi: ['き', 'こ'],
    strokes: 4,
    compounds: [
      { word: '木曜日', reading: 'もくようび', hanViet: 'MỘC DIỆU NHẬT', meaning: 'Thứ năm' },
      { word: '木', reading: 'き', hanViet: 'MỘC', meaning: 'Cái cây' }
    ]
  },
  {
    id: 'k5_19',
    level: 'N5',
    character: '金',
    hanViet: 'KIM',
    meaning: 'Vàng, tiền',
    onyomi: ['キン', 'コン'],
    kunyomi: ['かね'],
    strokes: 8,
    compounds: [
      { word: '金曜日', reading: 'きんようび', hanViet: 'KIM DIỆU NHẬT', meaning: 'Thứ sáu' },
      { word: 'お金', reading: 'おかね', hanViet: 'KIM', meaning: 'Tiền bạc' },
      { word: '料金', reading: 'りょうきん', hanViet: 'LIỆU KIM', meaning: 'Tiền cước, chi phí' }
    ]
  },
  {
    id: 'k5_20',
    level: 'N5',
    character: '土',
    hanViet: 'THỔ',
    meaning: 'Đất, thổ nhưỡng',
    onyomi: ['ド', 'ト'],
    kunyomi: ['つち'],
    strokes: 3,
    compounds: [
      { word: '土曜日', reading: 'どようび', hanViet: 'THỔ DIỆU NHẬT', meaning: 'Thứ bảy' },
      { word: '土地', reading: 'とち', hanViet: 'THỔ ĐỊA', meaning: 'Khu đất, vùng đất' }
    ]
  },
  {
    id: 'k5_21',
    level: 'N5',
    character: '人',
    hanViet: 'NHÂN',
    meaning: 'Con người',
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    strokes: 2,
    compounds: [
      { word: '日本人', reading: 'にほんじん', hanViet: 'NHẬT BẢN NHÂN', meaning: 'Người Nhật' },
      { word: '外国人', reading: 'がいこくじん', hanViet: 'NGOẠI QUỐC NHÂN', meaning: 'Người nước ngoài' },
      { word: '大人', reading: 'おとな', hanViet: 'ĐẠI NHÂN', meaning: 'Người lớn' }
    ]
  },
  {
    id: 'k5_22',
    level: 'N5',
    character: '大',
    hanViet: 'ĐẠI',
    meaning: 'To, lớn',
    onyomi: ['ダイ', 'タイ'],
    kunyomi: ['おお', 'おお.きい'],
    strokes: 3,
    compounds: [
      { word: '大学', reading: 'だいがく', hanViet: 'ĐẠI HỌC', meaning: 'Trường đại học' },
      { word: '大きい', reading: 'おおきい', hanViet: 'ĐẠI', meaning: 'To lớn' },
      { word: '大変', reading: 'たいへん', hanViet: 'ĐẠI BIẾN', meaning: 'Vất vả, khó khăn' }
    ]
  },
  {
    id: 'k5_23',
    level: 'N5',
    character: '小',
    hanViet: 'TIỂU',
    meaning: 'Nhỏ, bé',
    onyomi: ['ショウ'],
    kunyomi: ['ちい', 'ちい.さい', 'こ', 'お'],
    strokes: 3,
    compounds: [
      { word: '小さい', reading: 'ちいさい', hanViet: 'TIỂU', meaning: 'Nhỏ nhắn' },
      { word: '小学校', reading: 'しょうがっこう', hanViet: 'TIỂU HỌC HIỆU', meaning: 'Trường tiểu học' },
      { word: '小川', reading: 'おがわ', hanViet: 'TIỂU XUYÊN', meaning: 'Dòng suối nhỏ' }
    ]
  },
  {
    id: 'k5_24',
    level: 'N5',
    character: '学',
    hanViet: 'HỌC',
    meaning: 'Học tập, trường học',
    onyomi: ['ガク'],
    kunyomi: ['まな.ぶ'],
    strokes: 8,
    compounds: [
      { word: '学生', reading: 'がくせい', hanViet: 'HỌC SINH', meaning: 'Học sinh, sinh viên' },
      { word: '学校', reading: 'がっこう', hanViet: 'HỌC HIỆU', meaning: 'Trường học' },
      { word: '学ぶ', reading: 'まなぶ', hanViet: 'HỌC', meaning: 'Học hỏi' }
    ]
  },
  {
    id: 'k5_25',
    level: 'N5',
    character: '生',
    hanViet: 'SINH',
    meaning: 'Sống, sinh ra, học sinh',
    onyomi: ['セイ', 'ショウ'],
    kunyomi: ['い.きる', 'う.まれる', 'なま'],
    strokes: 5,
    compounds: [
      { word: '先生', reading: 'せんせい', hanViet: 'TIÊN SINH', meaning: 'Thầy cô giáo' },
      { word: '生まれる', reading: 'うまれる', hanViet: 'SINH', meaning: 'Được sinh ra' },
      { word: '生活', reading: 'せいかつ', hanViet: 'SINH HOẠT', meaning: 'Cuộc sống' },
      { word: '生ビール', reading: 'なまビール', hanViet: 'SINH', meaning: 'Bia tươi' }
    ]
  },
  {
    id: 'k5_26',
    level: 'N5',
    character: '先',
    hanViet: 'TIÊN',
    meaning: 'Trước, đi trước',
    onyomi: ['セン'],
    kunyomi: ['さき'],
    strokes: 6,
    compounds: [
      { word: '先月', reading: 'せんげつ', hanViet: 'TIÊN NGUYỆT', meaning: 'Tháng trước' },
      { word: '先週', reading: 'せんしゅう', hanViet: 'TIÊN CHU', meaning: 'Tuần trước' },
      { word: 'お先に', reading: 'おさきに', hanViet: 'TIÊN', meaning: 'Xin phép tôi về trước' }
    ]
  },
  {
    id: 'k5_27',
    level: 'N5',
    character: '私',
    hanViet: 'TƯ',
    meaning: 'Tôi, cá nhân',
    onyomi: ['シ'],
    kunyomi: ['わたし', 'わたくし'],
    strokes: 7,
    compounds: [
      { word: '私', reading: 'わたし', hanViet: 'TƯ', meaning: 'Tôi' },
      { word: '私立', reading: 'しりつ', hanViet: 'TƯ LẬP', meaning: 'Dân lập, tư thục' }
    ]
  },
  {
    id: 'k5_28',
    level: 'N5',
    character: '見',
    hanViet: 'KIẾN',
    meaning: 'Nhìn, xem, thấy',
    onyomi: ['ケン'],
    kunyomi: ['み.る', 'み.える', 'み.せる'],
    strokes: 7,
    compounds: [
      { word: '見る', reading: 'みる', hanViet: 'KIẾN', meaning: 'Xem, nhìn' },
      { word: '見える', reading: 'みえる', hanViet: 'KIẾN', meaning: 'Nhìn thấy' },
      { word: '見せる', reading: 'みせる', hanViet: 'KIẾN', meaning: 'Cho xem' },
      { word: '意見', reading: 'いけん', hanViet: 'Ý KIẾN', meaning: 'Ý kiến' }
    ]
  },
  {
    id: 'k5_29',
    level: 'N5',
    character: '行',
    hanViet: 'HÀNH',
    meaning: 'Đi, thực hiện',
    onyomi: ['コウ', 'ギョウ'],
    kunyomi: ['い.く', 'ゆ.く', 'おこな.う'],
    strokes: 6,
    compounds: [
      { word: '行く', reading: 'いく', hanViet: 'HÀNH', meaning: 'Đi tới' },
      { word: '銀行', reading: 'ぎんこう', hanViet: 'NGÂN HÀNH', meaning: 'Ngân hàng' },
      { word: '飛行機', reading: 'ひこうき', hanViet: 'PHI HÀNH CƠ', meaning: 'Máy bay' }
    ]
  },
  {
    id: 'k5_30',
    level: 'N5',
    character: '来',
    hanViet: 'LAI',
    meaning: 'Đến, tương lai',
    onyomi: ['ライ'],
    kunyomi: ['く.る', 'きた.る'],
    strokes: 7,
    compounds: [
      { word: '来る', reading: 'くる', hanViet: 'LAI', meaning: 'Đến' },
      { word: '来年', reading: 'らいねん', hanViet: 'LAI NIÊN', meaning: 'Năm sau' },
      { word: '来月', reading: 'らいげつ', hanViet: 'LAI NGUYỆT', meaning: 'Tháng sau' },
      { word: '将来', reading: 'しょうらい', hanViet: 'TƯƠNG LAI', meaning: 'Tương lai' }
    ]
  }
];
