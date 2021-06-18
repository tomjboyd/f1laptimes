export default {
  onClick(e, legendItem) {
    const index = legendItem.datasetIndex;
    const ci = this.chart;
    const currentDriverHidden = (ci.getDatasetMeta(index).hidden === null)
      ? false : ci.getDatasetMeta(index).hidden;

    const allOtherDriversVisible = ci.data.datasets.every((e, i) => {
      const meta = ci.getDatasetMeta(i);
      return i === index ? true : !meta.hidden;
    });

    const anyOtherDriverVisible = ci.data.datasets.some((e, i) => {
      const meta = ci.getDatasetMeta(i);
      return i === index ? false : !meta.hidden;
    });

    if (allOtherDriversVisible) {
      ci.data.datasets.forEach((e, i) => {
        const meta = ci.getDatasetMeta(i);
        if (i !== index) {
          meta.hidden = true;
        }
      });
    } else if (currentDriverHidden) {
      const meta = ci.getDatasetMeta(index);
      meta.hidden = null;
    } else if (!currentDriverHidden && anyOtherDriverVisible) {
      const meta = ci.getDatasetMeta(index);
      meta.hidden = true;
    } else {
      ci.data.datasets.forEach((e, i) => {
        const meta = ci.getDatasetMeta(i);
        meta.hidden = null;
      });
    }

    ci.update();
  },
};
