<div class="content-wrapper">
  <section class="content-header">
    <h1>
      Products
    </h1>
  </section>

  <%# <section class="content">
    <div class="row">
      <div class="col-xs-12">
        <div class="box box-default collapsed-box">
          <div class="box-header with-border">
            <h3 class="box-title">Advanced Search</h3>
            <div class="box-tools pull-right">
              <button class="btn btn-box-tool" data-widget="collapse">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
          <div class="box-body">
            <%= render partial: "job_applications/search" %>
          </div>
        </div>
      </div>
    </div>
  </section> %>

  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
        </div>
        <div class="box-body">
          <table id="example2" class="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Unit</th>
                <%# <th>Mobile Number</th> %>
                <th>Title</th>
                <%# <th>Resume</th> %>
              </tr>
            </thead>
            <tbody>
              <% @products.each do |b| %>
                <tr>
                  <td><%= b.created_at.strftime("%d-%b-%Y") %></td>
                  <td><%= b.description.to_s %></td>
                  <td><%= b.unit.to_s %></td>
                  <%# <td><%= b.mobile_number %></td> %>
                  <td><%= b.product.title rescue nil %></td>
                  <%# <td>
                    <% if b.resume.present? %>
                      <%= link_to "Resume", b.resume.url, target: "_blank" %>
                    <% end %>
                  </td> %>
                </tr>
              <% end %>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>





  request.format
