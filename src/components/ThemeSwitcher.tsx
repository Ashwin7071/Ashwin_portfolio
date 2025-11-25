import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Palette } from "lucide-react";

const themes = [
  { name: "Netflix", value: "netflix", color: "bg-red-600" },
  { name: "Blue", value: "blue", color: "bg-blue-600" },
  { name: "Purple", value: "purple", color: "bg-purple-600" },
  { name: "Green", value: "green", color: "bg-emerald-600" },
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState("netflix");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") || "netflix";
    setCurrentTheme(saved);
    document.documentElement.setAttribute("data-theme", saved === "netflix" ? "" : saved);
  }, []);

  const switchTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem("portfolio-theme", theme);
    document.documentElement.setAttribute("data-theme", theme === "netflix" ? "" : theme);
    setIsOpen(false);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="outline"
        size="icon"
        className="bg-secondary border-border hover:bg-muted"
      >
        <Palette className="h-5 w-5" />
      </Button> */}

      {isOpen && (
        <div className="absolute right-0 mt-2 p-4 bg-card border border-border rounded-lg shadow-xl animate-fade-in">
          <p className="text-sm font-semibold mb-3">Choose Theme</p>
          <div className="flex gap-3">
            {themes.map((theme) => (
              <button
                key={theme.value}
                onClick={() => switchTheme(theme.value)}
                className={`w-10 h-10 rounded-full ${theme.color} transition-all hover:scale-110 ${currentTheme === theme.value ? "ring-2 ring-offset-2 ring-offset-background ring-primary" : ""
                  }`}
                title={theme.name}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
