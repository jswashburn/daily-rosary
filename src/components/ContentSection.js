export default function ContentSection({children, ...props}) {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>
                {children}
            </p>
        </div>
    );
}
