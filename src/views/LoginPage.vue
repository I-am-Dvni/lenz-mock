<template>
  <div class="body">
    <FormCmp :fields="fields" :endpoint="endpoint" :metadata="metadata" />
  </div>
</template>

<script>
import FormCmp from "@/components/common/FormCmp.vue";

export default {
  name: "LoginPage",
  components: { FormCmp },
  data() {
    return {
      fields: [
        {
          label: "نام کاربری",
          category: "input",
          type: "text",
          model: "username",
          rule: [
            (val) =>
              (val && val.length > 0) || "لطفا نام کاربری خود را وارد کنید",
          ],
          inputClass: "text-white",
        },
        {
          label: "رمز عبور",
          category: "input",
          type: "password",
          model: "password",
          rule: [
            (val) =>
              (val && val.length > 0) || "لطفا رمز عبور خود را وارد کنید",
          ],
          inputClass: "text-white",
        },
        {
          label: "فایل",
          category: "file",
          type: "file",
          model: "file",
          rule: [],
          inputClass: "text-white",
        },
        {
          label: "توضیحات",
          category: "textArea",
          type: "textarea",
          model: "description",
          rule: [],
          inputClass: "text-white",
        },
        {
          label: "تاریخ شروع",
          category: "date",
          type: "date",
          model: "start_date",
          rule: [],
          inputClass: "text-white",
        },
      ],
      endpoint: "/login",
      metadata: {
        title: "ورود",
      },
    };
  },
};
</script>

<style scoped>
.body {
  background-color: var(--main-bg-color);
  position: fixed;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
