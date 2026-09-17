import { KanjiLesson, KanjiItem, KanjiExerciseQuestion } from '../types';
import { KANJI_N5_LIST } from './kanjiN5';
import { KANJI_N4_LIST } from './kanjiN4';
import { KANJI_N2_LIST } from './kanjiN2';

export const KANJI_N5_LESSONS: KanjiLesson[] = [
  {
    id: 1,
    level: 'N5',
    title: 'Bài 1: Con số cơ bản (Từ 1 đến 10)',
    subtitle: 'Nắm chắc các chữ số nhập môn, cách đếm ngày và đếm người',
    kanjiCharacters: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
    description: 'Các chữ số là nền tảng đầu tiên trong tiếng Nhật, vừa chỉ số lượng, vừa dùng ghép ngày tháng.'
  },
  {
    id: 2,
    level: 'N5',
    title: 'Bài 2: Số lớn, Tiền tệ & Đơn vị',
    subtitle: 'Trăm, nghìn, vạn, đồng Yên Nhật',
    kanjiCharacters: ['百', '千', '万', '日', '月'],
    description: 'Học cách đọc giá tiền (百, 千, 万, 円) và các đơn vị tính thời gian.'
  },
  {
    id: 3,
    level: 'N5',
    title: 'Bài 3: Lịch tuần & Ngũ hành tự nhiên',
    subtitle: 'Thứ trong tuần: Nhật, Nguyệt, Hỏa, Thủy, Mộc, Kim, Thổ',
    kanjiCharacters: ['火', '水', '木', '金', '土'],
    description: '7 ngày trong tuần của Nhật Bản đặt theo ngũ hành và các hành tinh.'
  },
  {
    id: 4,
    level: 'N5',
    title: 'Bài 4: Con người & Kích thước',
    subtitle: 'Nhân, Đại, Tiểu, Học, Sinh, Tiên, Tư',
    kanjiCharacters: ['人', '大', '小', '学', '生', '先', '私'],
    description: 'Các chữ Hán liên quan đến con người, danh xưng và trường học.'
  },
  {
    id: 5,
    level: 'N5',
    title: 'Bài 5: Hành động & Di chuyển',
    subtitle: 'Kiến (Nhìn), Hành (Đi), Lai (Đến)',
    kanjiCharacters: ['見', '行', '来'],
    description: 'Các động từ cơ bản xuất hiện nhiều nhất trong giao tiếp hằng ngày.'
  }
];

export const KANJI_N4_LESSONS: KanjiLesson[] = [
  {
    id: 6,
    level: 'N4',
    title: 'Bài 6: Xã hội & Công ty',
    subtitle: 'Hội (Gặp), Xã (Công ty), Điện, Xa (Xe cộ), Dịch (Nhà ga)',
    kanjiCharacters: ['会', '社', '電', '車', '駅'],
    description: 'Các từ vựng về đời sống công sở, phương tiện di chuyển hàng ngày.'
  },
  {
    id: 7,
    level: 'N4',
    title: 'Bài 7: Hoạt động ăn uống & Giao tiếp',
    subtitle: 'Thực (Ăn), Ẩm (Uống), Văn (Nghe), Độc (Đọc), Thư (Viết)',
    kanjiCharacters: ['食', '飲', '聞', '読', '書'],
    description: 'Các động từ sinh hoạt quan trọng cần dùng mỗi ngày.'
  },
  {
    id: 8,
    level: 'N4',
    title: 'Bài 8: Mối quan hệ & Thời gian',
    subtitle: 'Ngôn (Nói), Thoại (Trò chuyện), Mãi (Mua), Hữu (Bạn), Gian (Khoảng)',
    kanjiCharacters: ['言', '話', '買', '友', '間'],
    description: 'Từ ngữ về tình bạn bè, mua sắm và khoảng thời gian.'
  }
];

export const KANJI_N2_LESSONS: KanjiLesson[] = [
  {
    id: 9,
    level: 'N2',
    title: 'Bài 9: Xây dựng & Định hướng (N2)',
    subtitle: 'Cấu (Cơ cấu), Đạo (Chỉ đạo), Triển (Phát triển), Nhận, Thiết, Thi',
    kanjiCharacters: ['構', '導', '展', '認', '設', '施'],
    description: 'Các chữ Hán N2 thiết yếu trong văn bản kinh doanh, triển khai dự án.'
  },
  {
    id: 10,
    level: 'N2',
    title: 'Bài 10: Kinh tế, Pháp quyền & Thiệt hại (N2)',
    subtitle: 'Kinh, Tế (Kinh tế), Quyền (Quyền lợi), Hại, Quy (Quy tắc)',
    kanjiCharacters: ['経', '済', '権', '害', '規'],
    description: 'Hệ thống Hán tự về kinh tế học, quyền lợi và thể chế pháp luật.'
  },
  {
    id: 11,
    level: 'N2',
    title: 'Bài 11: Trách nhiệm & Thái độ ứng xử (N2)',
    subtitle: 'Trách, Nhiệm (Trách nhiệm), Thái, Độ (Thái độ)',
    kanjiCharacters: ['責', '任', '態', '度'],
    description: 'Hán tự thể hiện năng lực và thái độ làm việc trong môi trường chuyên nghiệp.'
  }
];

export function generateKanjiExercises(kanjiItems: KanjiItem[], count: number = 10): KanjiExerciseQuestion[] {
  if (kanjiItems.length === 0) return [];

  const questions: KanjiExerciseQuestion[] = [];
  const allPool = [...KANJI_N5_LIST, ...KANJI_N4_LIST, ...KANJI_N2_LIST];

  kanjiItems.forEach((targetKanji, idx) => {
    // Dạng 1: Đoán Âm Hán Việt
    const otherHanViets = allPool
      .filter((k) => k.character !== targetKanji.character)
      .map((k) => k.hanViet)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    const hanVietOptions = [targetKanji.hanViet, ...otherHanViets].sort(() => 0.5 - Math.random());

    questions.push({
      id: `q_hv_${targetKanji.character}_${idx}`,
      kanjiChar: targetKanji.character,
      type: 'hanviet',
      question: `Chữ Hán「 ${targetKanji.character} 」có âm Hán Việt là gì?`,
      subPrompt: `Ý nghĩa: ${targetKanji.meaning}`,
      options: hanVietOptions,
      correctIndex: hanVietOptions.indexOf(targetKanji.hanViet),
      explanation: `Chữ「 ${targetKanji.character} 」có âm Hán Việt là ${targetKanji.hanViet} (Nghĩa: ${targetKanji.meaning}).`
    });

    // Dạng 2: Từ ghép thực tế (Compound word reading)
    if (targetKanji.compounds && targetKanji.compounds.length > 0) {
      const compound = targetKanji.compounds[0];
      const otherReadings = allPool
        .flatMap((k) => k.compounds)
        .filter((c) => c.word !== compound.word && c.reading !== compound.reading)
        .map((c) => c.reading)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const readingOptions = [compound.reading, ...otherReadings].sort(() => 0.5 - Math.random());

      questions.push({
        id: `q_cp_${compound.word}_${idx}`,
        kanjiChar: targetKanji.character,
        type: 'compound',
        question: `Từ ghép「 ${compound.word} 」(${compound.meaning}) được đọc là gì?`,
        subPrompt: `Âm Hán Việt: ${compound.hanViet || targetKanji.hanViet}`,
        options: readingOptions,
        correctIndex: readingOptions.indexOf(compound.reading),
        explanation: `「 ${compound.word} 」đọc là「 ${compound.reading} 」mang nghĩa "${compound.meaning}".`
      });
    }

    // Dạng 3: Nhìn nghĩa tiếng Việt chọn chữ Hán
    const otherChars = allPool
      .filter((k) => k.character !== targetKanji.character)
      .map((k) => k.character)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const charOptions = [targetKanji.character, ...otherChars].sort(() => 0.5 - Math.random());

    questions.push({
      id: `q_ch_${targetKanji.character}_${idx}`,
      kanjiChar: targetKanji.character,
      type: 'meaning',
      question: `Chữ Kanji nào có âm Hán Việt là [ ${targetKanji.hanViet} ]?`,
      subPrompt: `Nghĩa tiếng Việt: "${targetKanji.meaning}"`,
      options: charOptions,
      correctIndex: charOptions.indexOf(targetKanji.character),
      explanation: `Chữ「 ${targetKanji.character} 」= [ ${targetKanji.hanViet} ] mang nghĩa "${targetKanji.meaning}".`
    });
  });

  return questions.sort(() => 0.5 - Math.random()).slice(0, count);
}
