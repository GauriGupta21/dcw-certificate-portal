// admin/script.js
function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        document.body.appendChild(container);
    }
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === 'success' ? 
        '<svg viewBox="0 0 24 24" width="20" height="20" style="color: #2ecc71"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' : 
        '<svg viewBox="0 0 24 24" width="20" height="20" style="color: #e74c3c"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>';
        
    toast.innerHTML = icon + '<span>' + message + '</span>';
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => { toast.classList.add('show'); }, 10);
    
    // Animate out
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => { toast.remove(); }, 300);
    }, 3000);
}

// Auto-trigger toast if PHP sets a global message
document.addEventListener('DOMContentLoaded', () => {
    if (typeof window.flashMessage !== 'undefined' && window.flashMessage) {
        showToast(window.flashMessage, window.flashMessageType || 'success');
    }
});
