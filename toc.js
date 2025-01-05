// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="perface.html"><strong aria-hidden="true">1.</strong> 前言</a></li><li class="chapter-item expanded "><a href="theory.html"><strong aria-hidden="true">2.</strong> 理论篇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="what-is-remote.html"><strong aria-hidden="true">2.1.</strong> 远程工作是什么</a></li><li class="chapter-item expanded "><a href="jobs.html"><strong aria-hidden="true">2.2.</strong> 什么样的工种适合远程工作</a></li><li class="chapter-item expanded "><a href="value-to-employers.html"><strong aria-hidden="true">2.3.</strong> 远程工作对于雇主的价值</a></li><li class="chapter-item expanded "><a href="value-to-employees.html"><strong aria-hidden="true">2.4.</strong> 远程工作对于雇员的价值</a></li><li class="chapter-item expanded "><a href="compared-with-outsource-project.html"><strong aria-hidden="true">2.5.</strong> 远程工作和外包的区别</a></li><li class="chapter-item expanded "><a href="some-questions.html"><strong aria-hidden="true">2.6.</strong> 采用远程工作需要考虑的问题</a></li><li class="chapter-item expanded "><a href="disadvantage.html"><strong aria-hidden="true">2.7.</strong> 远程工作的劣势</a></li></ol></li><li class="chapter-item expanded "><a href="experience.html"><strong aria-hidden="true">3.</strong> 经验篇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="experience-by-employees.html"><strong aria-hidden="true">3.1.</strong> 雇员远程工作经验</a></li><li class="chapter-item expanded "><a href="experience-by-employers.html"><strong aria-hidden="true">3.2.</strong> 雇主远程工作经验</a></li></ol></li><li class="chapter-item expanded "><a href="tools.html"><strong aria-hidden="true">4.</strong> 工具篇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="workflows.html"><strong aria-hidden="true">4.1.</strong> 远程团队工作流</a></li><li class="chapter-item expanded "><a href="project-management.html"><strong aria-hidden="true">4.2.</strong> 远程团队项目管理工具</a></li><li class="chapter-item expanded "><a href="task-management.html"><strong aria-hidden="true">4.3.</strong> 远程团队任务管理工具</a></li><li class="chapter-item expanded "><a href="communication-tools.html"><strong aria-hidden="true">4.4.</strong> 远程团队沟通工具</a></li><li class="chapter-item expanded "><a href="time-management.html"><strong aria-hidden="true">4.5.</strong> 远程团队时间管理工具</a></li><li class="chapter-item expanded "><a href="code-management.html"><strong aria-hidden="true">4.6.</strong> 远程团队代码管理工具</a></li><li class="chapter-item expanded "><a href="design-management.html"><strong aria-hidden="true">4.7.</strong> 远程团队设计管理工具</a></li><li class="chapter-item expanded "><a href="meeting-tools.html"><strong aria-hidden="true">4.8.</strong> 远程团队会议工具</a></li><li class="chapter-item expanded "><a href="document-tool.html"><strong aria-hidden="true">4.9.</strong> 远程团队文档协作工具</a></li></ol></li><li class="chapter-item expanded "><a href="interview.html"><strong aria-hidden="true">5.</strong> 访谈篇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="interview-by-tower.html"><strong aria-hidden="true">5.1.</strong> Tower 团队 48 个月远程实践</a></li><li class="chapter-item expanded "><a href="interview-by-deepdevelop.html"><strong aria-hidden="true">5.2.</strong> 从 300 到 300 万，一个远程外包团队的发展历程和经验</a></li><li class="chapter-item expanded "><a href="interview-by-deepdevelop-1.html"><strong aria-hidden="true">5.3.</strong> 从 300 万到 1000 万,DeepDevelop 外包业务第二阶段总结</a></li></ol></li><li class="chapter-item expanded "><a href="reference.html"><strong aria-hidden="true">6.</strong> 资料篇</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="books.html"><strong aria-hidden="true">6.1.</strong> 推荐书籍</a></li><li class="chapter-item expanded "><a href="podcast.html"><strong aria-hidden="true">6.2.</strong> 推荐播客</a></li><li class="chapter-item expanded "><a href="website.html"><strong aria-hidden="true">6.3.</strong> 推荐网站</a></li></ol></li><li class="chapter-item expanded "><a href="conclusion.html"><strong aria-hidden="true">7.</strong> 结语</a></li><li class="chapter-item expanded "><a href="changelog.html"><strong aria-hidden="true">8.</strong> 更新记录</a></li><li class="chapter-item expanded "><a href="about-me.html"><strong aria-hidden="true">9.</strong> 关于我</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
