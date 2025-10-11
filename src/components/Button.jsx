export const Button = ({ href, target, label, icon, classes }) => {
  if (href) {
    return (
      <a href={href} target={target}>
        <button className={`btn ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
        </button>
      </a>
    );
  } else {
    return (
      <button className={`btn ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};
