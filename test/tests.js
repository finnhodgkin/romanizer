// write your tests here
QUnit.module('Romanizer', function(assert){
  QUnit.test( "1 returns I", function (assert) {
    assert.equal( romanizer(1), 'I', "1 does return I" );
  });

  QUnit.test( "2 returns II", function (assert) {
    assert.equal( romanizer(2), 'II', "2 does return II" );
  });

  QUnit.test( "3 returns III", function (assert) {
    assert.equal( romanizer(3), 'III', "3 does return III" );
  });

  QUnit.test( "4 returns IV", function (assert) {
    assert.equal( romanizer(4), 'IV', "4 does return IV" );
  });

  QUnit.test( "5 returns V", function (assert) {
    assert.equal( romanizer(5), 'V', "5 does return V" );
  });

  QUnit.test( "6 returns VI", function (assert) {
    assert.equal( romanizer(6), 'VI', "6 does return VI" );
  });

  QUnit.test( "7 returns VII", function (assert) {
    assert.equal( romanizer(7), 'VII', "7 does return VII" );
  });

  QUnit.test( "8 returns VIII", function (assert) {
    assert.equal( romanizer(8), 'VIII', "8 does return VIII" );
  });

  QUnit.test( "9 returns IX", function (assert) {
    assert.equal( romanizer(9), 'IX', "9 does return IX" );
  });

  QUnit.test( "10 returns X", function (assert) {
    assert.equal( romanizer(10), 'X', "10 does return X" );
  });

  QUnit.test( "21 returns XXI", function (assert) {
    assert.equal( romanizer(21), 'XXI', "21 does return XXI" );
  });

  QUnit.test( "22 returns XXII", function (assert) {
    assert.equal( romanizer(22), 'XXII', "22 does return XXII" );
  });

  QUnit.test( "30 returns XXX", function (assert) {
    assert.equal( romanizer(30), 'XXX', "30 does return XXX" );
  });

  QUnit.test( "41 returns XLI", function (assert) {
    assert.equal( romanizer(41), 'XLI', "41 does return XLI" );
  });

  QUnit.test( "50 returns L", function (assert) {
    assert.equal( romanizer(50), 'L', "50 does return L" );
  });

  QUnit.test( "65 returns LXV", function (assert) {
    assert.equal( romanizer(65), 'LXV' );
  });

  QUnit.test( "70 returns LXX", function (assert) {
    assert.equal( romanizer(70), 'LXX', "70 does return LXX" );
  });

  QUnit.test( "81 returns LXXXI", function (assert) {
    assert.equal( romanizer(81), 'LXXXI', "81 does return LXXXI" );
  });

  QUnit.test( "99 returns XCIX", function (assert) {
    assert.equal( romanizer(99), 'XCIX' );
  });

  QUnit.test( "100 returns C", function (assert) {
    assert.equal( romanizer(100), 'C' );
  });

  QUnit.test( "135 returns CXXXV", function (assert) {
    assert.equal( romanizer(135), 'CXXXV' );
  });

  QUnit.test( "145 returns CXLV", function (assert) {
    assert.equal( romanizer(145), 'CXLV' );
  });

  QUnit.test( "199 returns CXCIX", function (assert) {
    assert.equal( romanizer(199), 'CXCIX' );
  });

  QUnit.test( "200 returns CC", function (assert) {
    assert.equal( romanizer(200), 'CC' );
  });

  QUnit.test( "598 returns DXCVIII", function (assert) {
    assert.equal( romanizer(598), 'DXCVIII' );
  });

  QUnit.test( "600 returns DC", function (assert) {
    assert.equal( romanizer(600), 'DC' );
  });

  QUnit.test( "786 returns DCCLXXXVI", function (assert) {
    assert.equal( romanizer(786), 'DCCLXXXVI' );
  });

  QUnit.test( "436 returns A NUMERAL", function (assert) {
    assert.equal( romanizer(436), 'CDXXXVI' );
  });

  
});
