// Interaction handlers and UI controls
class MindmapInteractions {
    constructor(mindmap) {
        this.mindmap = mindmap;
        this.init();
    }

    init() {
        this.setupControlButtons();
        this.setupPeriodFilters();
        this.setupModalHandlers();
        this.setupKeyboardShortcuts();
        this.setupResizeHandler();
        this.setupDetailPanel();
        this.setupSearch();
    }

    setupControlButtons() {
        // Zoom controls
        document.getElementById('zoom-in').addEventListener('click', () => {
            this.mindmap.zoomIn();
        });

        document.getElementById('zoom-out').addEventListener('click', () => {
            this.mindmap.zoomOut();
        });



        // Fullscreen toggle
        document.getElementById('fullscreen-btn').addEventListener('click', () => {
            this.toggleFullscreen();
        });

        // Info modal
        document.getElementById('info-btn').addEventListener('click', () => {
            this.showInfoModal();
        });
    }

    setupPeriodFilters() {
        const filterCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
        
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.updatePeriodFilter();
            });
        });
    }

    updatePeriodFilter() {
        const checkedPeriods = [];
        const checkboxes = document.querySelectorAll('.filter-option input[type="checkbox"]:checked');
        
        checkboxes.forEach(checkbox => {
            checkedPeriods.push(checkbox.dataset.period);
        });

        this.mindmap.filterByPeriod(checkedPeriods);
    }

    setupModalHandlers() {
        // Info modal
        const infoModal = document.getElementById('info-modal');
        const closeModalBtn = infoModal.querySelector('.close-modal');

        closeModalBtn.addEventListener('click', () => {
            this.hideInfoModal();
        });

        // Close modal when clicking outside
        infoModal.addEventListener('click', (event) => {
            if (event.target === infoModal) {
                this.hideInfoModal();
            }
        });
    }

    setupDetailPanel() {
        const closeBtn = document.getElementById('close-detail');
        closeBtn.addEventListener('click', () => {
            this.mindmap.hideDetailPanel();
            this.mindmap.deselectAll();
        });

        // Close panel when clicking outside (optional)
        document.addEventListener('click', (event) => {
            const panel = document.getElementById('detail-panel');
            const mindmapContainer = document.getElementById('mindmap-container');
            
            if (panel.classList.contains('open') && 
                !panel.contains(event.target) && 
                mindmapContainer.contains(event.target)) {
                // Only close if clicking in mindmap area, not on controls
                if (!event.target.closest('.control-panel')) {
                    this.mindmap.hideDetailPanel();
                    this.mindmap.deselectAll();
                }
            }
        });
    }

    setupKeyboardShortcuts() {
        document.addEventListener('keydown', (event) => {
            // Prevent default behavior for our shortcuts
            switch(event.key) {
                case 'Escape':
                    event.preventDefault();
                    this.mindmap.deselectAll();
                    this.hideInfoModal();
                    break;
                    
                case '+':
                case '=':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.mindmap.zoomIn();
                    }
                    break;
                    
                case '-':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.mindmap.zoomOut();
                    }
                    break;
                    
                case '0':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.mindmap.resetView();
                    }
                    break;
                    
                case 'f':
                case 'F':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.toggleFullscreen();
                    }
                    break;
                    
                case 'i':
                case 'I':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.showInfoModal();
                    }
                    break;

                case '1': // Tắt phím 1
                case '2': // Tắt phím 2
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        // this.togglePeriodFilter(event.key); // Bỏ
                    }
                    break;
                case '3':
                    if (event.ctrlKey || event.metaKey) {
                        event.preventDefault();
                        this.togglePeriodFilter(event.key); // Giữ phím 3
                    }
                    break;
            }
        });
    }

    togglePeriodFilter(key) {
        const periodMap = {
            // '1': '1930-1945', // Bỏ
            // '2': '1945-1975', // Bỏ
            '3': '1975-nay' // Giữ (vì data-period vẫn là 1975-nay)
        };
        
        const period = periodMap[key];
        if (period) {
            const checkbox = document.querySelector(`input[data-period="${period}"]`);
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
                this.updatePeriodFilter();
            }
        }
    }

    setupResizeHandler() {
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.mindmap.resize();
            }, 250);
        });
    }

    toggleFullscreen() {
        const fullscreenBtn = document.getElementById('fullscreen-btn');
        const icon = fullscreenBtn.querySelector('i');
        
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().then(() => {
                icon.className = 'fas fa-compress';
                fullscreenBtn.title = 'Exit Fullscreen';
            });
        } else {
            document.exitFullscreen().then(() => {
                icon.className = 'fas fa-expand';
                fullscreenBtn.title = 'Fullscreen';
            });
        }
    }

    showInfoModal() {
        const modal = document.getElementById('info-modal');
        modal.classList.add('show');
        
        // Focus management for accessibility
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.focus();
    }

    hideInfoModal() {
        const modal = document.getElementById('info-modal');
        modal.classList.remove('show');
    }

    // Touch/mobile interactions
    setupTouchInteractions() {
        let touchStartX, touchStartY;
        let isTouching = false;
        
        const mindmapContainer = document.getElementById('mindmap-container');
        
        mindmapContainer.addEventListener('touchstart', (event) => {
            if (event.touches.length === 1) {
                isTouching = true;
                touchStartX = event.touches[0].clientX;
                touchStartY = event.touches[0].clientY;
            }
        });
        
        mindmapContainer.addEventListener('touchmove', (event) => {
            if (isTouching && event.touches.length === 1) {
                event.preventDefault(); // Prevent scrolling
                
                const touchX = event.touches[0].clientX;
                const touchY = event.touches[0].clientY;
                
                const deltaX = touchX - touchStartX;
                const deltaY = touchY - touchStartY;
                
                // Implement panning logic here if needed
                // This would integrate with D3's zoom behavior
            }
        });
        
        mindmapContainer.addEventListener('touchend', () => {
            isTouching = false;
        });
    }

    // Search functionality
    setupSearch() {
        const searchInput = document.getElementById('search-input');
        let searchTimeout;

        searchInput.addEventListener('input', () => {
            clearTimeout(searchTimeout);

            const query = searchInput.value.trim();

            if (query === '') {
                this.clearSearch();
                return;
            }

            // Debounce the search function
            searchTimeout = setTimeout(() => {
                this.performSearch(query);
            }, 300); // Wait for 300ms after user stops typing
        });
    }

    performSearch(query) {
        this.clearSearch(); // Clear previous results

        if (!query || !query.trim()) {
            return;
        }

        const searchTerm = query.trim().toLowerCase();
        const allNodes = this.mindmap.g.selectAll('.node-group');
        const allLinks = this.mindmap.g.selectAll('.link');

        const matchingNodesData = [];
        this.mindmap.root.each(d => { // Iterate through the hierarchy data
            if (d.data.name && d.data.name.toLowerCase().includes(searchTerm)) {
                matchingNodesData.push(d);
            }
        });

        if (matchingNodesData.length > 0) {
            // Dim all nodes and links
            allNodes.classed('dimmed', true);
            allLinks.classed('dimmed', true);

            const nodesToHighlight = new Set();

            matchingNodesData.forEach(node => {
                // Highlight the node and its ancestors
                let current = node;
                while (current) {
                    nodesToHighlight.add(current.data.id);
                    current = current.parent;
                }
            });

            // Apply highlight and remove dimming
            allNodes.filter(d => nodesToHighlight.has(d.data.id))
                .classed('dimmed', false)
                .classed('search-highlight', d => d.data.name && d.data.name.toLowerCase().includes(searchTerm));

            allLinks.filter(l => nodesToHighlight.has(l.source.data.id) && nodesToHighlight.has(l.target.data.id))
                .classed('dimmed', false);

            // Zoom to the first found node
            const firstMatch = matchingNodesData[0];
            this.mindmap.focusOnNode(firstMatch);

        } else {
            // Show a popup if no results are found
            alert('Không tìm thấy sự kiện nào khớp với từ khóa của bạn.');
        }
    }

    clearSearch() {
        this.mindmap.g.selectAll('.node-group')
            .classed('dimmed', false)
            .classed('search-highlight', false);

        this.mindmap.g.selectAll('.link').classed('dimmed', false);
    }

    // Accessibility improvements
    setupAccessibility() {
        // Add ARIA labels
        document.getElementById('mindmap-svg').setAttribute('role', 'img');
        document.getElementById('mindmap-svg').setAttribute('aria-label', 'Sơ đồ tư duy Lịch sử Đảng Cộng sản Việt Nam');
        
        // Add keyboard navigation for nodes
        this.mindmap.g.selectAll('.node')
            .attr('tabindex', '0')
            .attr('role', 'button')
            .on('keydown', (event, d) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    this.mindmap.handleNodeClick(event, d);
                }
            });
    }

    // Export functionality
    setupExport() {
        const exportBtn = document.createElement('button');
        exportBtn.innerHTML = '<i class="fas fa-download"></i>';
        exportBtn.className = 'control-btn';
        exportBtn.title = 'Xuất hình ảnh';
        
        document.querySelector('.header-controls').appendChild(exportBtn);
        
        exportBtn.addEventListener('click', () => {
            this.exportMindmap();
        });
    }

    exportMindmap() {
        // Create a canvas and draw the SVG to it
        const svg = document.getElementById('mindmap-svg');
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = this.mindmap.width;
        canvas.height = this.mindmap.height;
        
        // Convert SVG to image (this is a simplified version)
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
        const svgUrl = URL.createObjectURL(svgBlob);
        
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            
            // Download the image
            canvas.toBlob((blob) => {
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'lich-su-dang-mindmap.png';
                a.click();
                URL.revokeObjectURL(url);
            });
            
            URL.revokeObjectURL(svgUrl);
        };
        img.src = svgUrl;
    }

    // Analytics and tracking (optional)
    trackInteraction(action, details = {}) {
        // This could integrate with analytics services
        console.log('User interaction:', action, details);
        
        // Example: Track node clicks, zoom actions, etc.
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                event_category: 'mindmap_interaction',
                ...details
            });
        }
    }

    static utils = {
        debounce(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        throttle(func, limit) {
            let inThrottle;
            return function() {
                const args = arguments;
                const context = this;
                if (!inThrottle) {
                    func.apply(context, args);
                    inThrottle = true;
                    setTimeout(() => inThrottle = false, limit);
                }
            };
        },

        isMobile() {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        },

        isTouch() {
            return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        }
    };
}