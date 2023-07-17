export const localeVN = {
    footerRowSelected: (count) =>
        count > 1 ? `${count.toLocaleString()} hàng đã chọn` : `${count.toLocaleString()} hàng đã chọn`,
    footerTotalRows: 'Tổng:',
    footerTotalVisibleRows: (visibleCount, totalCount) =>
        `${visibleCount.toLocaleString()} / ${totalCount.toLocaleString()}`,
    footerTotalRows: 'Tổng:',
    labelRowsPerPage: 'Hàng mỗi trang:',
    labelDisplayedRows: ({ from, to, count }) =>
        `${from}–${to} trên ${count !== -1 ? count : `hơn ${to}`}`,
}