tailwind.config = {
        theme: {
          extend: {
            colors: {
              bg: "#131317",
              lo: "#0e0e12",
              low: "#1b1b1f",
              hi: "#2a292e",
              ink: "#e4e1e7",
              mute: "#c5c9ae",
              line: "#444934",
              dim: "#8f937a",
              lime: "#c8f232",
              vio: "#d0bcff",
              vio2: "#571bc1",
            },
            fontFamily: {
              d: ["Space Grotesk"],
              m: ["JetBrains Mono"],
              b: ["Inter"],
            },
          },
        },
      };
document.addEventListener('DOMContentLoaded', () => {
      const menuButton = document.querySelector(".mobile-menu-button");
      const siteNavigation = document.querySelector("#site-navigation");

      menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute(
          "aria-label",
          isOpen ? "Open navigation menu" : "Close navigation menu",
        );
        siteNavigation.classList.toggle("is-open", !isOpen);
      });

      siteNavigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open navigation menu");
          siteNavigation.classList.remove("is-open");
        });
      });

const skills = [
        "Test Case Writing",
        "Bug Reporting",
        "Requirement Analysis",
        "System Analysis",
        "ER Diagram",
        "SDLC / Agile",
        "GitHub",
        "Figma",
      ];
      const tk = skills
        .map((s) => `<span>${s}</span><span class="text-lime">/</span>`)
        .join("");
      tick1.innerHTML = tick2.innerHTML = tk;

      const projects = [
        {
          n: "it-shop-Voice-assistant-by-RoawPap",
          when: "Year 2 · Semester 2",
          tag: "WEB UI",
          tech: ["UI Layout", "Responsive Design", "Teamwork"],
          url: "it-shop / voice-assistant",
          image: "photo/3.png",
          imageAlt: "Board Game Voice Assistant interface",
          gh: "https://github.com/Intanin-SE67/it-shop-Voice-assistant-by-RoawPap",
          pts: [
            "Enhanced and customized the website's visual design and layout.",
            "Introduced creative design elements to improve visual appeal.",
            "Refined page structure to improve readability and user interaction.",
            "Collaborated with the team to ensure a clean and responsive interface.",
          ],
        },
        {
          n: "LocalHot-Spot",
          when: "Year 2 · Semester 2",
          tag: "WEB APP",
          tech: ["UI/UX", "Navigation Flow", "Interaction Design"],
          url: "localhot-spot / ranking",
          image: "photo/4.png",
          imageAlt: "LocalHot Spot cafe voting and ranking page",
          gh: "https://github.com/Intanin-SE67/LocalHot-Spot",
          pts: [
            "Designed the user interface and overall layout for the LocalHot-Spot web application.",
            "Designed screen structures and navigation flow for a smooth voting and ranking experience.",
            "Developed interactive design elements to enhance user engagement.",
          ],
        },
      ];
      projects.unshift({
        n: "SE_Internship_tracking_system",
        when: "Year 3 · Semester 1",
        tag: "TEST",
        tech: ["Test Cases", "Functional / Regression", "k6 · 300 VUs", "Figma"],
        url: "github.com/IntaninK/SE_Internship_tracking_system",
        image: "photo/Screenshot%202026-10-03%20102148.png",
        imageAlt: "SE Internship Tracking System student profile and internship readiness status",
        gh: "https://github.com/IntaninK/SE_Internship_tracking_system",
        pts: [
          "Designed test cases for student, advisor, course instructor, and admin workflows.",
          "Performed functional and regression testing; documented and tracked issues to resolution.",
          "Configured k6 to simulate 300 concurrent users on the login page; checked HTTP 200 responses and response time under 500 ms.",
          "Designed UX/UI in Figma, from user flows and wireframes to interactive prototypes.",
        ],
      });
      const mock = `<div class="p-4 grid grid-cols-3 gap-3 h-full"><div class="col-span-3 h-5 rounded bar"></div><div class="col-span-2 rounded bar" style="height:90px"></div><div class="rounded bg-lime/20 border border-lime/40"></div><div class="rounded bar h-14"></div><div class="rounded bar h-14"></div><div class="rounded bar h-14"></div></div>`;
      acc.innerHTML = projects
        .map(
          (p, i) => `
<div class="py-6 item">
 <div class="head flex items-center justify-between cursor-pointer group py-2 select-none gap-3">
  <div class="flex items-center gap-5 min-w-0"><span class="font-m text-dim group-hover:text-lime">0${i + 1}</span>
   <span class="font-d font-bold text-2xl md:text-4xl group-hover:text-lime transition-all group-hover:translate-x-2 break-words">${p.n}</span></div>
  <div class="flex items-center gap-3 shrink-0"><span class="hidden md:inline font-m text-xs text-dim">${p.when}</span>
   <span class="font-m text-xs px-2 py-0.5 bg-hi text-lime border border-lime/30 rounded">${p.tag}</span>
   <span class="ico material-symbols-outlined text-lime">${i ? "keyboard_arrow_down" : "remove"}</span></div></div>
 <div class="body ${i ? "hidden" : ""} pt-6"><div class="grid lg:grid-cols-12 gap-6 p-5 bg-lo border border-line/50 rounded">
  <div class="lg:col-span-7 rounded border border-line/40 overflow-hidden bg-[#1f1f23]">
   <div class="flex items-center gap-2 px-3 py-2 bg-hi border-b border-line/30"><i class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></i><i class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></i><i class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></i><span class="font-m text-xs text-dim ml-3 truncate">${p.url}</span></div>
   <div class="aspect-[16/9] bg-lo">${p.image ? `<img src="${p.image}" alt="${p.imageAlt}" class="h-full w-full object-contain">` : mock}</div></div>
  <div class="lg:col-span-5 flex flex-col justify-between gap-4"><div>
   <div class="lbl text-dim mb-3">${p.when} · My role</div>
   <ul class="space-y-2 text-[14px] text-ink">${p.pts.map((t) => `<li class="flex gap-2"><span class="text-lime">▸</span><span>${t}</span></li>`).join("")}</ul>
   <div class="flex flex-wrap gap-2 pt-4">${p.tech.map((t) => `<span class="px-2 py-1 bg-hi border border-line/60 font-m text-xs rounded">${t}</span>`).join("")}</div></div>
   ${p.gh ? `<div class="pt-4 border-t border-line/30"><a href="${p.gh}" target="_blank" rel="noopener" class="inline-flex px-4 py-2 bg-lime hover:bg-white text-[#171e00] font-m text-sm font-bold rounded">Source &lt;/&gt; ↗</a></div>` : ""}
  </div></div></div></div>`,
        )
        .join("");
      acc.querySelectorAll(".head").forEach(
        (h) => {
          h.onclick = () => {
            const it = h.parentElement,
              open = !it.querySelector(".body").classList.contains("hidden");
            acc.querySelectorAll(".item").forEach((x) => {
              const body = x.querySelector(".body");
              body.classList.add("hidden");
              body.classList.remove("is-opening");
              x.querySelector(".ico").innerText = "keyboard_arrow_down";
            });
            if (!open) {
              const body = it.querySelector(".body");
              body.classList.remove("hidden");
              body.classList.add("is-opening");
              it.querySelector(".ico").innerText = "remove";
            }
          };
        },
      );

      if ("IntersectionObserver" in window) {
        const revealGroups = [
          document.querySelectorAll("header"),
          document.querySelectorAll(
            "#top .hero-section > :first-child, #top .hero-title, #top .hero-section > :last-child",
          ),
          document.querySelectorAll("#profile > div:first-child"),
          document.querySelectorAll("#profile .grid > .card"),
          document.querySelectorAll("#projects > div:first-child"),
          document.querySelectorAll("#acc .item"),
          document.querySelectorAll("#tech-stack > div:first-child"),
          document.querySelectorAll("#tech-stack .tech-card"),
          document.querySelectorAll("#contact"),
          document.querySelectorAll("#contact > div"),
          document.querySelectorAll("footer"),
        ];

        const revealTargets = revealGroups.flatMap((group) =>
          Array.from(group).map((element, index) => {
            element.classList.add("reveal-on-scroll");
            element.style.setProperty(
              "--reveal-delay",
              `${Math.min(index * 70, 280)}ms`,
            );
            return element;
          }),
        );

        document.body.classList.add("motion-ready");
        const revealObserver = new IntersectionObserver(
          (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
        );

        revealTargets.forEach((element) => revealObserver.observe(element));
      }

});
