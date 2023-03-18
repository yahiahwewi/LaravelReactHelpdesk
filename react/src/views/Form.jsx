import React from 'react'

export default function 
() {
  return (
    <div>

<div class="col-md-8 ps-4">
    <div>
        <div class="container">
            <h2 class="text-muted">
                Submit a Ticket
            </h2>
            <div class="oe_structure"></div>
            <span class="hidden" data-for="helpdesk_ticket_form" data-values="{'team_id': 1}"></span>
            <div class="helpdesk_section">
                <section class="s_website_form pt16 pb16 o_colored_level" data-vcss="001" data-snippet="s_website_form" data-name="Form">
                    <div class="container">
                        <form action="/website/form/" method="post" enctype="multipart/form-data" class="o_mark_required" data-mark="*" data-pre-fill="true" data-success-mode="redirect" data-success-page="/your-ticket-has-been-submitted" data-model_name="helpdesk.ticket">
                            <div class="s_website_form_rows row s_col_no_bgcolor">
                                <div class="mb-0 py-2 s_website_form_field col-12 s_website_form_required" data-type="char" data-name="Field">
                                    <div class="row s_col_no_resize s_col_no_bgcolor">
                                        <label class="col-form-label col-sm-auto s_website_form_label" style="width: 200px">
                                            <span class="s_website_form_label_content">Your Name</span>
                                            <span class="s_website_form_mark"> *</span>
                                        </label>
                                        <div class="col-sm">
                                            <input type="text" class="form-control s_website_form_input" name="partner_name" required="1"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-0 py-2 s_website_form_field col-12 s_website_form_required" data-type="email" data-name="Field">
                                    <div class="row s_col_no_resize s_col_no_bgcolor">
                                        <label class="col-form-label col-sm-auto s_website_form_label " style="width: 200px">
                                            <span class="s_website_form_label_content">Your Email</span>
                                            <span class="s_website_form_mark"> *</span>
                                        </label>
                                        <div class="col-sm">
                                            <input type="email" class="form-control s_website_form_input" name="partner_email" required="1"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-0 py-2 s_website_form_field col-12 s_website_form_model_required" data-type="char" data-name="Field">
                                    <div class="row s_col_no_resize s_col_no_bgcolor">
                                        <label class="col-form-label col-sm-auto s_website_form_label " style="width: 200px">
                                            <span class="s_website_form_label_content">Subject</span>
                                            <span class="s_website_form_mark"> *</span>
                                        </label>
                                        <div class="col-sm">
                                            <input type="text" class="form-control s_website_form_input" name="name" required="true"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-0 py-2 s_website_form_field col-12" data-type="char" data-name="Field">
                                    <div class="row s_col_no_resize s_col_no_bgcolor">
                                        <label class="col-form-label col-sm-auto s_website_form_label " style="width: 200px">
                                            <span class="s_website_form_label_content">Description</span>
                                        </label>
                                        <div/>


    
    </div>
  )
}
