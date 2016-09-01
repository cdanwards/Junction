

export interface ListProps {
  className?: string;
  children?: any;
  style?: any;
}

const List = ({ className, children, style }: ListProps) => (
  <ul style={ style } className={`${className || ""}`}>
    {children}
  </ul>
);

export default List;
