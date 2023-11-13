export default function ContentSection({children, ...props}) {
    return (
        <div className="content__section">
            <h2 className="content__section__title">{props.title}</h2>
            <p>
                {children}
            </p>
        </div>
    );
}
