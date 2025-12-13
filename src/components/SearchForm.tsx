interface Props {
  query: string;
  includeAdult: boolean;
  language: string;
  onQueryChange: (v: string) => void;
  onAdultChange: (v: boolean) => void;
  onLanguageChange: (v: string) => void;
  onSearch: () => void;
}

export default function SearchForm({
  query,
  includeAdult,
  language,
  onQueryChange,
  onAdultChange,
  onLanguageChange,
  onSearch,
}: Props) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl space-y-4">
      <div>
        <label className="block mb-1 font-semibold">🎬 영화 제목</label>
        <input
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="영화 제목을 입력하세요"
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
      </div>

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={includeAdult}
          onChange={(e) => onAdultChange(e.target.checked)}
        />
        <span>성인 콘텐츠 포함</span>
      </div>

      <select
        value={language}
        onChange={(e) => onLanguageChange(e.target.value)}
        className="w-full p-2 rounded bg-gray-800 text-white"
      >
        <option value="ko-KR">한국어</option>
        <option value="en-US">영어</option>
        <option value="ja-JP">일본어</option>
      </select>

      <button
        onClick={onSearch}
        className="w-full bg-blue-200 py-2 rounded hover:bg-blue-700"
      >
        🔍 검색하기
      </button>
    </div>
  );
}
