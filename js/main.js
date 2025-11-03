// Main application controller
class VietnamCommunistPartyHistoryApp {
    constructor() {
        this.mindmap = null;
        this.interactions = null;
        this.animations = null;
        this.isLoaded = false;
        
        this.init();
    }

    async init() {
        // Show loading screen
        this.showLoadingScreen();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.startApp());
        } else {
            this.startApp();
        }
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loading-screen');
        if (loadingScreen) {
            loadingScreen.style.display = 'flex';
        }
    }

    async startApp() {
        try {
            // Initialize animations controller first
            this.animations = new MindmapAnimations(null);
            
            // Start loading animation and wait for it to finish
            this.animations.animateLoading();
            await this.animations.hideLoadingScreen();

            // Load additional data if needed
            await this.loadAdditionalData();
            
            // Initialize mindmap
            await this.initializeMindmap();

            // Now that the mindmap is ready, start the entrance animation
            this.animations.startMindmapEntrance();

            // Initialize interactions
            this.initializeInteractions();
            
            // Setup additional features
            this.setupAdditionalFeatures();
            
            // Mark as loaded
            this.isLoaded = true;
            
            console.log('Vietnamese Communist Party History Mindmap loaded successfully!');
            
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showErrorMessage('Có lỗi xảy ra khi tải ứng dụng. Vui lòng thử lại.');
        }
    }

    async loadAdditionalData() {
        // Simulate loading additional content
        return new Promise(resolve => {
            setTimeout(() => {
                // Here you could load additional period data
                // For now, we'll extend the main data with additional periods
                this.extendMindmapData();
                resolve();
            }, 1000);
        });
    }

    extendMindmapData() {
        // Check if data objects exist before pushing
        if (typeof periodData1945_1975 !== 'undefined' && typeof periodData1975_2018 !== 'undefined') {
            // Add the period data from data.js to the main mindmap data
            mindmapData.children.push(periodData1945_1975, periodData1975_2018);
        } else {
            console.error('Period data is not defined. Make sure data.js is loaded correctly.');
        }
    }

    async initializeMindmap() {
        // Initialize the mindmap with the container and data
        this.mindmap = new VietnameseCommunistPartyMindmap('#mindmap-container', mindmapData);
        
        // Update animations reference
        this.animations.mindmap = this.mindmap;
        
        // Wait for mindmap to be ready
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    initializeInteractions() {
        // Initialize interaction handlers
        this.interactions = new MindmapInteractions(this.mindmap);
        
        // Setup additional interaction features
                if (this.interactions.constructor.utils.isTouch()) {
            this.interactions.setupTouchInteractions();
        }
        
        this.interactions.setupAccessibility();
        this.interactions.setupExport();
    }

    setupAdditionalFeatures() {
        // Setup search functionality
        this.interactions.setupSearch();
        
        // Setup performance monitoring
        this.setupPerformanceMonitoring();
        
        // Setup error handling
        this.setupErrorHandling();
        
        // Setup analytics (if needed)
        this.setupAnalytics();
    }

    setupPerformanceMonitoring() {
        // Monitor performance and optimize if needed
        let frameCount = 0;
        let lastTime = performance.now();
        
        const checkPerformance = () => {
            frameCount++;
            const currentTime = performance.now();
            
            if (currentTime - lastTime >= 1000) {
                const fps = frameCount;
                frameCount = 0;
                lastTime = currentTime;
                
                // If FPS is too low, reduce animations
                if (fps < 30) {
                    this.animations.pauseAnimations();
                    console.warn('Low FPS detected, reducing animations');
                }
            }
            
            requestAnimationFrame(checkPerformance);
        };
        
        requestAnimationFrame(checkPerformance);
    }

    setupErrorHandling() {
        window.addEventListener('error', (event) => {
            console.error('Application error:', event.error);
            this.showErrorMessage('Đã xảy ra lỗi. Vui lòng tải lại trang.');
        });
        
        window.addEventListener('unhandledrejection', (event) => {
            console.error('Unhandled promise rejection:', event.reason);
            this.showErrorMessage('Đã xảy ra lỗi khi tải dữ liệu.');
        });
    }

    setupAnalytics() {
        // Track app initialization
        this.interactions?.trackInteraction('app_initialized', {
            timestamp: new Date().toISOString(),
            user_agent: navigator.userAgent,
            screen_size: `${window.innerWidth}x${window.innerHeight}`
        });
    }

    showErrorMessage(message) {
        // Create error notification
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-notification';
        errorDiv.innerHTML = `
            <div class="error-content">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        document.body.appendChild(errorDiv);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentElement) {
                errorDiv.remove();
            }
        }, 5000);
    }

    // Public API methods
    getSelectedNode() {
        return this.mindmap?.selectedNode || null;
    }

    selectNode(nodeId) {
        if (!this.mindmap) return false;
        
        // Find node by ID and select it
        const node = this.findNodeById(nodeId);
        if (node) {
            this.mindmap.handleNodeClick(null, node);
            return true;
        }
        return false;
    }

    findNodeById(nodeId) {
        let foundNode = null;
        
        this.mindmap.nodeGroup?.each(function(d) {
            if (d.data.id === nodeId) {
                foundNode = d;
            }
        });
        
        return foundNode;
    }

    exportData() {
        return {
            selectedNode: this.getSelectedNode()?.data,
            zoomLevel: this.mindmap?.currentZoom,
            timestamp: new Date().toISOString()
        };
    }

    // Cleanup method
    destroy() {
        if (this.mindmap) {
            // Clean up D3 elements
            this.mindmap.svg.remove();
            this.mindmap.tooltip.remove();
        }
        
        // Remove event listeners
        window.removeEventListener('resize', this.handleResize);
        document.removeEventListener('keydown', this.handleKeydown);
        
        this.isLoaded = false;
    }
}

// Initialize the application when the script loads
let app;

// Wait for all dependencies to load
if (typeof d3 !== 'undefined') {
    app = new VietnamCommunistPartyHistoryApp();
} else {
    // Wait for D3 to load
    window.addEventListener('load', () => {
        app = new VietnamCommunistPartyHistoryApp();
    });
}

// Export for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = VietnamCommunistPartyHistoryApp;
}
