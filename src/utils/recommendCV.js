function recommendCV(appList) {
    let newAppList = []
    for (let app of appList) {
        let point = 0
        for (let skill of app.findCv.skills) {
            let indiPoint = 0
            let findSkill = app.findPosition.requirements.find(req => {
                return req.skillId == skill.skillId
            })
            if (findSkill) {
                indiPoint = 10 * skill.years
            }
            else {
                indiPoint = 3 * skill.years
            }
            point = point + indiPoint
        }
        let newApp = {
            ...app,
            point: point
        }
        newAppList.push(newApp)
    }
    newAppList.sort((a, b) => {
        return b.point - a.point;
    });
    console.log("newAppList: ", newAppList)
    return newAppList
}

export default recommendCV