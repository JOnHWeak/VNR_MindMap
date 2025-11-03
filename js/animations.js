// Animation controller for the mindmap
class MindmapAnimations {
    constructor(mindmap) {
        this.mindmap = mindmap;
        this.animationQueue = [];
        this.isAnimating = false;
    }

    // Loading sequence animation
    animateLoading() {
        const loadingScreen = document.getElementById('loading-screen');
        const progressBar = loadingScreen.querySelector('.loading-progress');
        const logo = loadingScreen.querySelector('.loading-logo');
        
        // Animate logo
        logo.classList.add('animate-pulse');
        
        // Animate progress bar
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                setTimeout(() => this.hideLoadingScreen(), 500);
            }
            progressBar.style.width = progress + '%';
        }, 200);
    }

    hideLoadingScreen() {
        return new Promise(resolve => {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.classList.add('fade-out');

            setTimeout(() => {
                loadingScreen.style.display = 'none';
                resolve();
            }, 500);
        });
    }

    startMindmapEntrance() {
        const container = document.querySelector('.mindmap-container');
        container.classList.add('mindmap-entrance');
        
        // Animate header
        this.animateHeader();
        
        // Start mindmap animation after header
        setTimeout(() => {
            this.animateMindmapNodes();
        }, 300);
    }

    animateHeader() {
        const header = document.querySelector('.header');
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = '0';
        
        setTimeout(() => {
            header.style.transition = 'transform 0.6s ease, opacity 0.6s ease';
            header.style.transform = 'translateY(0)';
            header.style.opacity = '1';
        }, 100);
    }

    animateMindmapNodes() {
        const container = document.querySelector('.mindmap-container');
        container.classList.remove('mindmap-entrance');
        container.classList.add('mindmap-ready');
        
        // Animate central node first
        this.animateNodeSequence();
    }

    animateNodeSequence() {
        const nodes = this.mindmap.nodeGroup.nodes();
        const links = this.mindmap.linkGroup.nodes();
        
        // Sort nodes by hierarchy level
        const nodesByLevel = this.groupNodesByLevel();
        
        let delay = 0;
        
        // Animate each level
        Object.keys(nodesByLevel).sort().forEach(level => {
            setTimeout(() => {
                this.animateNodesAtLevel(nodesByLevel[level], level);
            }, delay);
            delay += 400;
        });
        
        // Animate links after nodes
        setTimeout(() => {
            this.animateLinks();
        }, delay + 200);
    }

    groupNodesByLevel() {
        const nodesByLevel = {};
        
        this.mindmap.nodeGroup.each(function(d) {
            const level = d.depth;
            if (!nodesByLevel[level]) {
                nodesByLevel[level] = [];
            }
            nodesByLevel[level].push(this);
        });
        
        return nodesByLevel;
    }

    animateNodesAtLevel(nodes, level) {
        nodes.forEach((nodeElement, index) => {
            const node = d3.select(nodeElement);
            
            setTimeout(() => {
                node.classed('node-animate-in', true);
                
                // Add bounce effect for important nodes
                if (level <= 1) {
                    setTimeout(() => {
                        node.classed('animate-bounce', true);
                        setTimeout(() => {
                            node.classed('animate-bounce', false);
                        }, 1000);
                    }, 800);
                }
            }, index * 100);
        });
    }

    animateLinks() {
        this.mindmap.linkGroup.selectAll('.link')
            .each(function(d, i) {
                const link = d3.select(this);
                setTimeout(() => {
                    link.classed('link-animate-in', true);
                }, i * 50);
            });
    }

    // Node interaction animations
    animateNodeHover(node, isEntering) {
        const nodeElement = d3.select(node);
        
        if (isEntering) {
            nodeElement
                .transition()
                .duration(200)
                .attr('transform', 'scale(1.1)')
                .style('filter', 'drop-shadow(0 4px 12px rgba(0,0,0,0.3))');
        } else {
            nodeElement
                .transition()
                .duration(200)
                .attr('transform', 'scale(1)')
                .style('filter', null);
        }
    }

    animateNodeClick(node) {
        const nodeElement = d3.select(node);
        
        // Pulse animation
        nodeElement.classed('animate-pulse', true);
        setTimeout(() => {
            nodeElement.classed('animate-pulse', false);
        }, 600);
        
        // Ripple effect
        this.createRippleEffect(node);
    }

    createRippleEffect(node) {
        const nodeData = d3.select(node).datum();
        const x = nodeData.y;
        const y = nodeData.x;
        
        const ripple = this.mindmap.g.append('circle')
            .attr('cx', x)
            .attr('cy', y)
            .attr('r', 0)
            .style('fill', 'none')
            .style('stroke', '#d9534f')
            .style('stroke-width', 2)
            .style('opacity', 1);
        
        ripple.transition()
            .duration(600)
            .attr('r', 100)
            .style('opacity', 0)
            .on('end', function() {
                d3.select(this).remove();
            });
    }

    // Detail panel animations
    animateDetailPanelOpen() {
        const panel = document.getElementById('detail-panel');
        panel.classList.add('animate-slide-in-right');
        
        setTimeout(() => {
            panel.classList.remove('animate-slide-in-right');
        }, 400);
    }

    animateDetailPanelClose() {
        const panel = document.getElementById('detail-panel');
        panel.classList.add('animate-slide-out-right');
        
        setTimeout(() => {
            panel.classList.remove('animate-slide-out-right');
        }, 400);
    }

    // Zoom animations
    animateZoom(scale, duration = 500) {
        const svg = this.mindmap.svg;
        const currentTransform = d3.zoomTransform(svg.node());
        
        svg.transition()
            .duration(duration)
            .call(
                d3.zoom().transform,
                d3.zoomIdentity.scale(scale).translate(currentTransform.x, currentTransform.y)
            );
    }

    // Filter animations
    animatePeriodFilter(period, show) {
        const selector = `.period-${period.split('-')[0]}`;
        const elements = this.mindmap.g.selectAll(selector);
        
        if (show) {
            elements
                .classed('period-hidden', false)
                .transition()
                .duration(300)
                .style('opacity', 1)
                .style('transform', 'scale(1)');
        } else {
            elements
                .transition()
                .duration(300)
                .style('opacity', 0)
                .style('transform', 'scale(0.8)')
                .on('end', function() {
                    d3.select(this).classed('period-hidden', true);
                });
        }
    }

    // Connection highlighting animations
    animateConnectionHighlight(connections, highlight) {
        if (highlight) {
            // Animate highlighting
            connections.nodes.forEach((node, index) => {
                setTimeout(() => {
                    d3.select(node)
                        .classed('highlighted', true)
                        .transition()
                        .duration(200)
                        .style('transform', 'scale(1.05)');
                }, index * 50);
            });
            
            connections.links.forEach((link, index) => {
                setTimeout(() => {
                    d3.select(link)
                        .classed('highlighted', true)
                        .transition()
                        .duration(200)
                        .style('stroke-width', '4px');
                }, index * 30);
            });
        } else {
            // Animate un-highlighting
            connections.nodes.forEach(node => {
                d3.select(node)
                    .classed('highlighted', false)
                    .transition()
                    .duration(200)
                    .style('transform', 'scale(1)');
            });
            
            connections.links.forEach(link => {
                d3.select(link)
                    .classed('highlighted', false)
                    .transition()
                    .duration(200)
                    .style('stroke-width', null);
            });
        }
    }

    // Search result animations
    animateSearchResults(results) {
        // Clear previous highlights
        this.mindmap.g.selectAll('.node').classed('search-highlight', false);
        
        // Animate new highlights
        results.forEach((node, index) => {
            setTimeout(() => {
                d3.select(node)
                    .classed('search-highlight', true)
                    .transition()
                    .duration(300)
                    .style('transform', 'scale(1.1)')
                    .transition()
                    .duration(300)
                    .style('transform', 'scale(1)');
            }, index * 100);
        });
    }

    // Utility animations
    fadeIn(element, duration = 300) {
        d3.select(element)
            .style('opacity', 0)
            .transition()
            .duration(duration)
            .style('opacity', 1);
    }

    fadeOut(element, duration = 300) {
        return new Promise(resolve => {
            d3.select(element)
                .transition()
                .duration(duration)
                .style('opacity', 0)
                .on('end', resolve);
        });
    }

    slideIn(element, direction = 'right', duration = 300) {
        const transforms = {
            right: 'translateX(100%)',
            left: 'translateX(-100%)',
            up: 'translateY(-100%)',
            down: 'translateY(100%)'
        };
        
        d3.select(element)
            .style('transform', transforms[direction])
            .transition()
            .duration(duration)
            .style('transform', 'translate(0, 0)');
    }

    // Queue system for complex animations
    queueAnimation(animationFunction, delay = 0) {
        this.animationQueue.push({ function: animationFunction, delay });
        
        if (!this.isAnimating) {
            this.processAnimationQueue();
        }
    }

    processAnimationQueue() {
        if (this.animationQueue.length === 0) {
            this.isAnimating = false;
            return;
        }
        
        this.isAnimating = true;
        const nextAnimation = this.animationQueue.shift();
        
        setTimeout(() => {
            nextAnimation.function();
            this.processAnimationQueue();
        }, nextAnimation.delay);
    }

    // Performance optimization
    pauseAnimations() {
        document.body.classList.add('animations-paused');
    }

    resumeAnimations() {
        document.body.classList.remove('animations-paused');
    }

    // Accessibility considerations
    respectReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Disable or reduce animations
            document.body.classList.add('reduced-motion');
            return true;
        }
        return false;
    }
}
