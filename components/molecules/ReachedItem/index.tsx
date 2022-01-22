interface ReachedItemProps {
  reach: string;
  title: string;
  classMargin: string;
}
export default function ReachedItem(props: ReachedItemProps) {
  const { reach, title, classMargin } = props;

  return (
    <div className={classMargin}>
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {reach}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {title}
      </p>
    </div>
  );
}
