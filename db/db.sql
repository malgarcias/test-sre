
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `password` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `test`
--

INSERT INTO `users` (`id`, `name`, `lastname`, `password`) VALUES
(NULL, 'kylin', 'thomas', '1111');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `test`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `test`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;