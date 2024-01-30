import "./App.css";

function App() {
  const [dataDetails, setDataDetails] = useState([]);
  const [page, setPage] = useState(1);
  const getData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    // console.log(data);
    setDataDetails((prev) => [...prev, ...data]);
  };

  useEffect(() => {
    getData();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // window.innerHeight  ==>  visible area of webpage (height of browser window viewport).
    // document.documentElement.scrollHeight ==> container web page height.
    // document.documentElement.scrollTop ==> scroll height.
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return <></>;
}

export default App;
