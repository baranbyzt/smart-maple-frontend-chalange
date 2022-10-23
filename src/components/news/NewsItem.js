import style from "./style.module.css";

const NewsItem = ({ data }) => {
  return (
    <div className={style.itemWrapper}>
      <img src={data.img_url} />
      <p className={style.title}>{data.title}</p>
    </div>
  );
};

export default NewsItem;
