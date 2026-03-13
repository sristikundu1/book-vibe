import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { getStoreBook } from "../../utils/localstorage";

const BookPage = () => {
  const allBooks = useLoaderData();
  const [chartData, setChartData] = useState([]);

  // Triangle shape path
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
     Z`;

  // Triangle bar component
  function TriangleBar(props) {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null || width == null || height == null) {
      return null;
    }

    return (
      <path
        d={getPath(Number(x), Number(y), Number(width), Number(height))}
        stroke="none"
        fill={fill}
      />
    );
  }
  useEffect(() => {
    const storeBookIds = getStoreBook("ReadBook").map(Number);

    const StoreBooks = allBooks.filter((book) =>
      storeBookIds.includes(book.bookId),
    );

    // map data for chart
    const colors = ["#0085f6", "#00c29c", "#fbb929", "#fc8042", "#fb0100"];
    const chartData = StoreBooks.map((book, index) => ({
      name: book.bookName,
      totalPage: book.totalPages,
      fill: colors[index % colors.length],
    }));
    setChartData(chartData);
  }, [allBooks]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {chartData.length === 0 ? (
        <p className="text-center">No books added yet.</p>
      ) : (
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalPage" shape={<TriangleBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default BookPage;
