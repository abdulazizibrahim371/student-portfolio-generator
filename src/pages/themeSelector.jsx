import  themes  from "./theme";

function ThemeSelector({ selected, setSelected }) {
  return (
    <div className="mb-6 text-center">
      <h3 className="text-lg font-bold mb-2">Choose a Theme:</h3>
      <div className="flex justify-center gap-4 flex-wrap">
        {Object.entries(themes).map(([key, theme]) => (
          <button
            key={key}
            onClick={() => setSelected(key)}
            className={`w-24 h-16 rounded shadow-md border-2 transition-all ${
              selected === key ? "border-purple-600 scale-105" : "border-transparent"
            } ${theme.preview}`}
            title={theme.name}
          />
        ))}
      </div>
    </div>
  );
}

export default ThemeSelector;
