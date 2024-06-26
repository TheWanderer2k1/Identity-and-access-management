exports.checkPermission = async (data) => {
    let check = false
    for (const ele of data.scopes) {
        let scope = await DB_CONNECTION.models.Scope.findOne({
            where: {
                title: ele
            },
            include: DB_CONNECTION.models.Permission
        })

        if (scope == null)
            return false
        
        for (const ele of scope.Permissions) {
            if (data.url == ele.accessible_url && data.method == ele.method)   
                check = true
        }
    }

    return check
}