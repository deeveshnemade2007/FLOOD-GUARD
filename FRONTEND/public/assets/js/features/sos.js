// FLOWCHART BACKEND REQUEST-RESPONSE SIMULATOR (POST /flood-reports)
// ==========================================================================
function handleSosSubmit(e) {
    e.preventDefault();

    const submitBtn = document.getElementById('btnSubmitSos');
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> EXECUTING BACKEND PIPELINE...`;

    // 1. Gather Form Data
    const name = document.getElementById('citizenName').value;
    const phone = document.getElementById('citizenPhone').value;
    const area = document.getElementById('citizenArea').value;
    const depth = document.getElementById('waterDepth').value;
    const category = document.getElementById('emergencyCategory').value;
    const description = document.getElementById('sosDescription').value;

    const pipelineStatus = document.getElementById('pipelineStatus');

    // ANIMATED PIPELINE STEP SEQUENCE (MATCHING ATTACHED DIAGRAM)
    animatePipelineStep('step1', '1/7 User fills report');
    
    setTimeout(() => {
        animatePipelineStep('step2', '2/7 Frontend sending POST /flood-reports');
        
        setTimeout(() => {
            animatePipelineStep('step3', '3/7 Express API route hit');
            
            setTimeout(() => {
                animatePipelineStep('step4', '4/7 Express validating payload & coords');
                
                setTimeout(() => {
                    animatePipelineStep('step5', '5/7 PostgreSQL inserting SOS record');
                    
                    setTimeout(() => {
                        animatePipelineStep('step6', '6/7 Backend returning HTTP 201 Created');
                        
                        setTimeout(() => {
                            animatePipelineStep('step7', '7/7 Frontend displaying success & updating Govt dashboard');
                            
                            // Generate Backend Ticket
                            const ticketId = `PNE-SOS-${Math.floor(1000 + Math.random() * 9000)}`;
                            const newReport = {
                                id: ticketId,
                                name: name,
                                phone: phone,
                                area: area,
                                depth: depth,
                                category: category,
                                description: description || 'Emergency evacuation needed.',
                                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST',
                                status: 'PENDING_RESCUE',
                                coords: area.includes('Sinhagad') ? [18.4870, 73.8310] : [18.5180, 73.8430]
                            };

                            // Add to global state store
                            state.citizenReports.unshift(newReport);
                            renderIncidentList();
                            renderMapSosMarkers();

                            // Show Response Modal
                            document.getElementById('resTicketId').textContent = ticketId;
                            document.getElementById('responseModal').classList.add('active');

                            // Reset Form
                            document.getElementById('sosReportForm').reset();
                            submitBtn.disabled = false;
                            submitBtn.innerHTML = `<i class="fa-solid fa-satellite-dish"></i> SUBMIT SOS REPORT & DISPATCH RESCUE TEAM`;

                        }, 400);
                    }, 400);
                }, 400);
            }, 400);
        }, 400);
    }, 400);
}

function animatePipelineStep(stepId, statusText) {
    document.querySelectorAll('.pipe-step').forEach(s => s.classList.remove('active'));
    const stepEl = document.getElementById(stepId);
    if (stepEl) {
        stepEl.classList.add('active');
        stepEl.classList.add('success');
    }
    document.getElementById('pipelineStatus').textContent = `STATUS: ${statusText.toUpperCase()}`;
}

function closeResponseModal() {
    document.getElementById('responseModal').classList.remove('active');
}
