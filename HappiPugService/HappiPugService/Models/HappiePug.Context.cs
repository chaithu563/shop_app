﻿//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using HappiPugService.Models;
using System;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;

public partial class happipugEntities : DbContext
{
    public happipugEntities()
        : base("name=happipugEntities")
    {
    }

    protected override void OnModelCreating(DbModelBuilder modelBuilder)
    {
        throw new UnintentionalCodeFirstException();
    }

    public DbSet<MovieItem> MovieItems { get; set; }
    public DbSet<Movie> Movies { get; set; }
}
