<template>
  <div
    class="flex justify-center items-center"
    style="max-width: 100%; height: 100%"
  >
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md w-1/2 bg-primary px-36 py-8 rounded-2xl"
    >
      <p>{{ metadata.title }}</p>
      <p v-if="inputs.length > 1">{{ inputs[1].model }}</p>

      <q-input
        v-for="field in inputs"
        :key="field.model"
        filled
        :input-class="field.inputClass"
        :type="field.type"
        v-model="field.model"
        :label="field.label"
        lazy-rules
        :rules="field.rule"
        color="secondary"
        label-color="secondary"
      />

      <q-file
        v-for="field in files"
        :key="field.model"
        filled
        :input-class="field.inputClass"
        :type="field.type"
        v-model="field.model"
        :label="field.label"
        lazy-rules
        color="secondary"
        label-color="secondary"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>

      <q-input
        v-for="field in dates"
        :key="field.model"
        filled
        :input-class="field.inputClass"
        v-model="field.model"
        :label="field.label"
        lazy-rules
        color="secondary"
        label-color="secondary"
      >
        <template v-slot:prepend>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="field.model" mask="YYYY-MM-DD HH:mm">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>

        <template v-slot:append>
          <q-icon name="access_time" class="cursor-pointer">
            <q-popup-proxy
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-time v-model="field.model" mask="HH:mm" format24h>
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-time>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <q-input
        v-for="field in textAreas"
        :key="field.model"
        filled
        :input-class="field.inputClass"
        type="textarea"
        v-model="field.model"
        :label="field.label"
        lazy-rules
        :rules="field.rule"
        color="secondary"
        label-color="secondary"
      />

      <div>
        <q-btn label="ثبت" type="submit" color="secondary" />
        <q-btn
          label="Reset"
          type="reset"
          color="secondary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  data() {
    return {
      inputs: [],
      textAreas: [],
      dates: [],
      files: [],
    };
  },
  props: {
    fields: {
      type: Array,
    },
    metadata: {
      type: Object,
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submission", {});
    },
  },
  mounted() {
    this.fields.map((field) => {
      /*if (field.input === "input") {
        this.inputs.push(field);
      }*/
      switch (field.category) {
        case "input":
          this.inputs.push(field);
          break;
        case "textArea":
          this.textAreas.push(field);
          break;
        case "date":
          this.dates.push(field);
          break;
        case "file":
          this.files.push(field);
          break;
      }
    });
  },
};
</script>

<style scoped></style>
