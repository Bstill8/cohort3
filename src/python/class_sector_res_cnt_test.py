import class_sector_res_cnt
classes_sectors = class_sector_res_cnt.class_sector_pop()
def test_attributes_in_classes_sectors():
    assert "classes" in classes_sectors
    assert "sectors" in classes_sectors
    assert "Industrial" in classes_sectors["classes"]
    assert "Residential" in classes_sectors["classes"]
    assert "CENTRE" in classes_sectors["sectors"]
    assert "WEST" in classes_sectors["sectors"]
    assert "total" in classes_sectors
