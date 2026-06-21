export const Button = ({ href, target, download, label, icon, classes }) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        download={download}
        className={`btn ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  }

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
};
