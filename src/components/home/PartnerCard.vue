<template>
    <div class="box">
        <div class="title__wrap">
            <p class="num">{{ partner.num }}</p>
            <h2 class="title">{{ partner.title }}</h2>
        </div>
        <span class="description" v-html="partner.desc"></span>
    </div>
</template>
<script>
export default {
    props: [
        "partner"
    ]
}
</script>
<style lang="scss">
.box {
    background-color: #fff;
    width: 300px;
    padding: 50px 20px !important;

    .title__wrap {
        display: flex;
        justify-content: center;
        margin-bottom: 30px;

        .num {
            font-size: 30px;
            color: #ffc453;
        }

        .title {
            margin-left: 10px;
            font-size: 30px;
            color: #333333;
        }
    }

    .description {
        font-size: 15px;
        color: #333333;
        line-height: 25px;
    }
}
</style>