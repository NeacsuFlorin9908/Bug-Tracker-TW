export default bug;


function bug(bug){
    if(bug != undefined){
        this._id=bug._id;
        this.name=bug.name;
        this.details=bug.details;
        this.link=bug.link;
        this.assigned=bug.assigned;
        this.creator=bug.creator;
        this.priority=bug.priority;
        this.severity = bug.severity;   
    }
}