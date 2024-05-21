document.getElementById('issueInputForm').addEventListener('submit', submitIssue);
function submitIssue(e)
{
    const getInputValue = id => document.getElementById(id).value;
    const description = getInputValue('issueDescription');
    const severity = getInputValue('issueSeverity');
    const assignedTo = getInputValue('issueAssignTo');
    const id = Math.floor(Math.random()*100000000) + '';
    const status = 'Open';
}

