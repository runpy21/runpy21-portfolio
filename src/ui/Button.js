function Button({ children, className, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <button className={className}>{children}</button>
    </a>
  );
}
export default Button;
