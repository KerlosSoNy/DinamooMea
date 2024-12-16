interface Table {
    data: { id: number | string, body: string, title: string }[],
    columns: {
        title: string;
        dataIndex: string;
        key: string
    }[],
    handleDelete: (id: number) => void
}

interface Link {
    link :{
        title: string;
        url: string;
        iconSrc: string
    }
}