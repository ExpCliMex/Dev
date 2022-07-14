const records = [
  {
    id: 3,
    address: '0xb4f890092c14c044f94170b128a4da20ca6f7fed',
    token: 'pruebassdkfjd',
    password: 'prueba123',
  },
];

exports.findByToken = function (token, cb) {
  process.nextTick(function () {
    for (let i = 0, len = records.length; i < len; i++) {
      const record = records[i];
      if (record.token === token) {
        return cb(null, record);
      }
    }
    return cb(null, null);
  });
};

exports.findByAddress = (address, cb) => {
  process.nextTick(() => {
    const record = records.find((record) => record.address === address);
    if (record) return cb(null, record);
    return cb(null, null);
  });
};
