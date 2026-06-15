type UserCardProps = {
    name: string;
    email: string;
    umur: number;
};

function Usercard({ name, email, umur }: UserCardProps) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Email: {email}</p>
            <p>Umur: {umur}</p>
        </div>
    );
}

export default Usercard;