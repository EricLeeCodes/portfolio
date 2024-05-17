"use client";

function HeroButtons() {
  const handleScrollToProjects = () => {};

  return (
    <div className="flex items-center justify-around pt-[10%]">
      <button onClick={handleScrollToProjects} className="bg-blue-500">
        Projects
      </button>
      <a href="/EricLeeResume.pdf" download="Eric Lee Resume">
        <button>Download Resume</button>
      </a>
    </div>
  );
}

export default HeroButtons;
