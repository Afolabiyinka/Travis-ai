import React from "react";

import { useParams, useSearchParams } from "react-router-dom";
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = parseInt(searchParams.get("page") || "1", 10);
  const [currentPage, setCurrentPage] = React.useState<number>(initialPage);

  // Sync page with URL
  React.useEffect(() => {
    const allowedPaths = ["/movies"];
    if (allowedPaths.includes(location.pathname)) {
      setSearchParams({ page: currentPage.toString() });
    }
  }, [currentPage, location.pathname, setSearchParams]);