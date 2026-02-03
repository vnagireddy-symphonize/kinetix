const container = document.getElementById('workflowContainer');
const createBtn = document.getElementById('createBtn');
const settingsBtn = document.getElementById('settingsBtn');

let workflows = [
    { id: 1, title: 'Data Pipeline', desc: 'Syncs SQL to Cloud Storage', version: '1.2.0' },
    { id: 2, title: 'Auto-Report', desc: 'Generates weekly PDF analytics', version: '2.0.1' }
];

function renderWorkflows() {
    container.innerHTML = '';
    workflows.forEach(flow => {
        const card = document.createElement('div');
        card.className = 'workflow-card';
        card.innerHTML = `
            <h3>${flow.title}</h3>
            <p>${flow.desc}</p>
            <span class="version">v${flow.version}</span>
            <button class="trash-btn" onclick="deleteWorkflow(${flow.id})">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 6h18v2H3V6zm2 3h14v13c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V9zm3 3v8h2v-8H8zm4 0v8h2v-8h-2zm4 0v8h2v-8h-2zM9 4V2h6v2h5v2H4V4h5z"/>
                </svg>
            </button>
        `;
        container.appendChild(card);
    });
}

window.deleteWorkflow = (id) => {
    workflows = workflows.filter(f => f.id !== id);
    renderWorkflows();
};

createBtn.addEventListener('click', () => {
    const newFlow = {
        id: Date.now(),
        title: 'New Workflow',
        desc: 'Description of the process...',
        version: '1.0.0'
    };
    workflows.push(newFlow);
    renderWorkflows();
});

settingsBtn.addEventListener('click', () => {
    window.electronAPI.openSettings();
    alert('Settings logic triggered via IPC');
});

// Initial load
renderWorkflows();