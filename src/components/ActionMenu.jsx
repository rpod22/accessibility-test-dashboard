export default function ActionMenu() {
    return (
        <div>
            <span onClick={() => alert("Menu opened")}>⋮</span>
            <div style={{ display: "none" }}>
                <div>Delete</div>
                <div>Edit</div>
            </div>
        </div>
    )
}
//no focus, no roles, no keyboard support