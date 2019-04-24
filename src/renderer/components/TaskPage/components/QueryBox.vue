<template>
    <Tree :data="data1"></Tree>
</template>
<script>
export default {
    data() {
        return {
            data1: [
                {
                    title: "广州市场监管项目",
                    expand: true,
                    children: [
                        {
                            title: "梅州市场监管",
                            expand: true,
                            children: [
                                {
                                    title: "数据画像"
                                },
                                {
                                    title: "数据可视化"
                                }
                            ]
                        },
                        {
                            title: "深圳特种设备不见面审批",
                            expand: true,
                            children: [
                                {
                                    title: "施工告知",
                                    children: [
                                        {
                                            title: "维保合同设备关系展示"
                                        },
                                        {
                                            title: "使用单位类型改造"
                                        }
                                    ]
                                },
                                {
                                    title: "使用登记"
                                }
                            ]
                        }
                    ]
                }
            ]
        };
    }
};
</script>