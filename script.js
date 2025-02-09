$(document).ready(function () {
    const regions = {
        "Region 1": ["District 1-1", "District 1-2"],
        "Region 2": ["District 2-1", "District 2-2"]
    };

    let regionDropdown = $("#region");
    let districtDropdown = $("#district");

    regionDropdown.append('<option value="">Select Region</option>');
    $.each(regions, function (region) {
        regionDropdown.append(`<option value="${region}">${region}</option>`);
    });

    $("#region").change(function () {
        let selectedRegion = $(this).val();
        districtDropdown.empty().append('<option value="">Select District</option>');
        $.each(regions[selectedRegion] || [], function (index, district) {
            districtDropdown.append(`<option value="${district}">${district}</option>`);
        });
    });

    $("#registration-form").submit(function (event) {
        event.preventDefault();

        let userData = {
            fullname: $("#fullname").val(),
            regNumber: $("#reg-number").val(),
            sex: $("#sex").val(),
            email: $("#email").val(),
            region: $("#region").val(),
            district: $("#district").val(),
            password: $("#password").val()
        };

        $.ajax({
            url: "http://localhost:3000/register",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(userData),
            success: function (response) {
                $("#message").text(response.message).css("color", "green");
            },
            error: function (xhr) {
                $("#message").text(xhr.responseJSON.error).css("color", "red");
            }
        });
    });
});